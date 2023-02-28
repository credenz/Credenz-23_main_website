from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.password_validation import validate_password
from .models import *

class TokenPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
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
            "country_code", 
            "referralCode", 
            "ieee_member",
            "ieee_member_id",
            "senior",
            "institute"
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
        referral = validated_data.pop("referralCode", None)
        user = User.objects.create(
            username=validated_data["username"],
            email=validated_data["email"],
            phone=validated_data["phone"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
            country_code=validated_data["country_code"],
            ieee_member=validated_data["ieee_member"],
            ieee_member_id=validated_data["ieee_member_id"],
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
    class Meta:
        model = Order
        fields = "__all__"

class ProfileSerializer(serializers.ModelSerializer):
    order = OrderSerializer(many=True, read_only=True, source="orders")

    class Meta:
        model = User
        fields = [
            "username", 
            "first_name",
            "last_name", 
            "email", 
            "phone", 
            "senior",
            "institute",
            "coins",
            "referral",
            "order"
        ]

