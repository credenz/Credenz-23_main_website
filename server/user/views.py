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

PASSWORD_RESET_URL = (
    "https://frontend-link/password-reset-confirm?token={token}&uid={uid}"
)

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

class OrderView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = get_object_or_404(User, id=request.user.id)
        orders = Order.objects.filter(user=user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)


# Team event APIs

# check if the team member has registered
class CheckUserView(generics.GenericAPIView):
    def post(self, request):
        username = request.data["username"]
        phone_no = request.data["phone_no"]

        if User.objects.filter(username = username, phone_no = phone_no):
            return Response({"message" : "verified"}, status=status.HTTP_200_OK)
        
        return Response({"message" : "not verified"}, status=status.HTTP_400_BAD_REQUEST)
    
# Offline Register APIs
class RegisterPlayerView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        if (request.user__offline_officer == True):
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response({"message" : "saved"}, status=status.HTTP_201_CREATED)
        

        
