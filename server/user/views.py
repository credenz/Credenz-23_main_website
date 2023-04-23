from django.db.models import Count
from django.conf import settings
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.shortcuts import get_object_or_404
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.safestring import mark_safe
from rest_framework import generics, status
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.views import APIView
from .serializers import *
from .models import *
from openpyxl import load_workbook

PASSWORD_RESET_URL = (
    "https://credenz.in/forget-password/{token}/{uid}"
)

class FeedbackView(generics.CreateAPIView):
    serializer_class = FeedbackSerializer
    queryset = Feedback.objects.all()

class UploadFileView(generics.GenericAPIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = UploadFileSerializer(data=request.data)
        if serializer.is_valid():
            file = serializer.validated_data["file"]
            wb = load_workbook(filename=file)
            ws = wb.active
            upi_col_num = None
            for cell in ws['1']:
                if cell.value == 'upi':
                    upi_col_num = cell.column
                    break
            f_check = 0
            c_check = 0
            for row in ws.iter_rows(min_row=2, values_only=True):
                upi = str(row[upi_col_num - 1])
                if upi != "None":
                    transaction_id = upi.split('/')[1].strip()
                    amount_excel = row[upi_col_num - 2]
                    print(transaction_id, amount_excel)
                try:
                    transaction = Transaction.objects.get(transaction_id=transaction_id)
                except Transaction.DoesNotExist:
                    raise ValueError("Transaction ID does not exist")
                    continue
                amount_transaction = transaction.amount
                if amount_excel == amount_transaction:
                    c_check += 1
                    Order.objects.filter(transaction_id=transaction_id).update(payment="CO")
                    transaction.payment = "CO"
                    transaction.save()
                else:
                    f_check += 1
            return Response({"message" : f"transactions completed: faulty {f_check}, completed {c_check}"}, status=status.HTTP_202_ACCEPTED)


class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        token_pair = {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }
        return Response(token_pair, status=status.HTTP_201_CREATED)


class UserLoginView(generics.GenericAPIView):
    serializer_class = TokenPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
    
class EventsDetail(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
    
class LeaderboardView(generics.ListAPIView):
    queryset = (
        User.objects.all().annotate(num_ref=Count("referrals")).order_by("-num_ref")
    )

    serializer_class = ProfileSerializer

class PasswordResetView(generics.GenericAPIView):
    def post(self, request):
        email = request.data.get("email")

        try:
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            token = default_token_generator.make_token(user)
            reset_url = mark_safe(PASSWORD_RESET_URL.format(token=token, uid=uid))
            context = {"user": user, "reset_url": reset_url}
            html_message = render_to_string("password-reset-temp.html", context=context)
            send_mail(
                'Reset your password',
                '',
                settings.EMAIL_HOST_USER,
                [email],
                html_message=html_message,
                fail_silently=False,
    )

            return Response(
                {"message": "Link sent to mail!"}, status=status.HTTP_200_OK
            )

        except User.DoesNotExist:
            raise ValidationError({"email": "This email dosn't belongs to any user"})


class PasswordResetConfirmView(generics.GenericAPIView):
    def post(self, request):
        uid = request.data["uid"]
        user_id = urlsafe_base64_decode(uid)
        token = request.data["token"]
        new_password = request.data["new_password"]
        user = User.objects.get(id=user_id)
        if not user:
            message = "User doesn't exist"
            return Response({"message": message}, status=status.HTTP_400_BAD_REQUEST)
        elif default_token_generator.check_token(user, token):
            user.set_password(new_password)
            user.save()
            return Response(
                {"message": "password reset success"}, status=status.HTTP_200_OK
            )
        else:
            message = "Link is invalid or expired"
        return Response({"message": message}, status=status.HTTP_400_BAD_REQUEST)
    
class VerifyReferralCodeView(generics.GenericAPIView):
    serializer_class = ReferralCodeVerifySerializer

    def post(self, request):
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data)

class OrderView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = get_object_or_404(User, id=request.user.id)
        orders = Order.objects.filter(user=user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

class PlaceOrderView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # save order for each particular event
        user = request.user
        event_list = request.data['event_list']
        transaction_id = request.data["transaction_id"]
        amount = request.data["amount"]

        for event in event_list:
            order = Order(user = user, event = Event.objects.get(event_id = event), transaction_id=transaction_id)
            order.save()

        # add transaction for the complete list of events
        transaction = Transaction(event_list = event_list, user = user, transaction_id = transaction_id, amount=amount)
        transaction.save()

        return Response({"message" : "order placed"}, status=status.HTTP_201_CREATED)
    

    
# Team event APIs
class GenerateTeamCodeView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        event = int(request.data['event_id'])
        team_name = request.data['team_name']
        user = request.user

        if Order.objects.get(event=event, user=user):
            if not Team.objects.filter(event=event, user=user):
                new_team = Team.objects.create(event=Event.objects.get(event_id = event), team_name = team_name)
                new_team.user.add(request.user)
                return Response({"message": new_team.team_id}, status=status.HTTP_201_CREATED)
            else:
                raise ValueError("Team already exists for this user and event.")
        else:
            raise ValueError("No order exists for this user and event.")

class JoinTeamView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        team_id = request.data['team_id']
        event_check = Team.objects.get(team_id=team_id).event

        if Order.objects.filter(event = event_check, user = user, payment = "CO"):
            if not Team.objects.filter(user = user, event = event_check):
                if Team.objects.filter(team_id = team_id):
                    exis_team = Team.objects.get(team_id = team_id)
                    exis_team.user.add(request.user)
                    return Response({"message" : "User added to Team"}, status=status.HTTP_201_CREATED)
                else:
                    raise ValueError(f"Invalid team ID : {team_id}")
            else:
                raise ValueError("Team already exists for this user and event.")
        else:
            raise ValueError("No order exists for this user and event.")

class TeamView(generics.ListAPIView):
    serializer_class = TeamSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Team.objects.filter(user=user)
    
# Offline Register APIs
class RegisterPlayerView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        if (request.user__offline_officer == True):
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"message" : "saved"}, status=status.HTTP_201_CREATED)
        
class OfflineOrderView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        order_user = request.data['username']
        event_list = request.data['event_list']
        transaction_id = request.data["transaction_id"]
        amount = request.data["amount"]
        if request.user__offline_officer:
            for event in event_list:
                order = Order(user = User.objects.get(username=order_user), event = Event.objects.get(event_id = event), order_taker = request.user__full_name, payment="CO")
                order.save()

            # add transaction for the complete list of events
            transaction = Transaction(event_list = event_list, user = User.objects.get(username=order_user), transaction_id = transaction_id, amount=amount, payment ="CO")
            transaction.save()

            return Response({"message" : "order placed"}, status=status.HTTP_201_CREATED)
        
        raise ValueError("Transaction not allowed")

class TransactionListView(generics.ListAPIView):
    serializer_class = TransactionSerializer
    permission_classes = [IsAdminUser]
    queryset = Team.objects.all()

class TransactionConfirmView(generics.GenericAPIView):
    permission_classes = [IsAdminUser]

    def post(self, request):
        transaction_id = request.data["transaction_id"]

        transaction = Transaction.objects.filter(transaction_id = transaction_id)
        transaction.payment = "CO"
        transaction.save()

        return Response({"message" : "confirmed"}, status=status.HTTP_202_ACCEPTED)
        
