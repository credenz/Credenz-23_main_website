from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from .models import *

class TokenPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = "__all__"

class UploadFileSerializer(serializers.Serializer):
    file = serializers.FileField()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(max_length=20, required=True)
    referralCode = serializers.CharField(
        required=False, allow_null=True, allow_blank=True
    )

    class Meta:
        model = User
        fields = [
            "username", 
            "first_name",
            "last_name",
            "password", 
            "email", 
            "phone", 
            "referralCode", 
            "senior",
            "institute",
            ]

        extra_kwargs = {
            "password": {"write_only": True},
        }

    def validate_password(self, value):
        validate_password(value)
        return value

    def _referral_verification(self, referral_code="", referee=None):
        referrer = User.objects.filter(referral=referral_code).first()
        if referrer and not referee.referral_taken:
            return Referral.save_invite_referral(
                referrer,
                referee,
                referral_code,
            )

    def create(self, validated_data):
        email = validated_data.get('email')
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError('Email already exists.')
        referral = validated_data.pop("referralCode", None)
        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
            phone=validated_data["phone"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            senior=validated_data["senior"],
            institute=validated_data["institute"],
        )
        user.set_password(validated_data["password"])
        user.save()
        if referral:
            self._referral_verification(referral, user)
        return user
    
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    event = EventSerializer()
    order_date = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S')
    class Meta:
        model = Order
        fields = "__all__"

class TeamSerializer(serializers.ModelSerializer):
    event = EventSerializer()
    user = UserSerializer(many=True)
    class Meta:
        model = Team
        fields= "__all__"

class ProfileSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    phone = serializers.CharField(max_length=20, required=True)
    username = serializers.CharField(max_length=20)
    orders = serializers.SerializerMethodField()
    is_admin = serializers.BooleanField(source='is_staff', read_only=True)
    is_superuser = serializers.BooleanField(read_only=True)

    def get_orders(self, obj):
        user = self.context['request'].user
        if user == obj:
            orders = Order.objects.filter(user=user)
            return OrderSerializer(orders, many=True).data
        else:
            return []

    class Meta:
        model = User
        fields = [
            "username", 
            "full_name",
            "email", 
            "phone", 
            "senior",
            "institute",
            "coins",
            "referral",
            "orders",
            "offline_officer",
            "is_admin",
            "is_superuser",
        ]


class ReferralCodeVerifySerializer(serializers.Serializer):
    referralCode = serializers.CharField()

    def validate(self, attrs):
        if not User.objects.filter(referral=attrs["referralCode"]).exists():
            raise serializers.ValidationError(
                {"referralCode": "referral code is invalid"}
            )

        return attrs

# offline order serializer
class TransactionSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Transaction
        fields = '__all__'