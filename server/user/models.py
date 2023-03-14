from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from .utils import getReferralCode

class User(AbstractUser):
    email = models.EmailField(unique=True)
    phone = models.IntegerField(null = True)
    institute = models.TextField(default="", max_length=512)
    senior = models.BooleanField(default=False)
    referral = models.CharField(
        max_length=100, null=True, db_index=True, unique=True, blank=True
    )
    coins = models.IntegerField(default=0)
    offline_officer = models.BooleanField(default=False)

    @property
    def full_name(self):
        name = "%s %s" % (self.first_name, self.last_name)
        return name.strip()
    
    @property
    def referral_taken(self) -> bool:
        return Referral.objects.filter(referred_user=self.id).exists()

    def generate_referral_code(self, save=True):
        self.referral = getReferralCode()
        if save:
            self.save()

    def save(self, *args, **kwargs):
        if not self.id:
            self.generate_referral_code(save=False)
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return str(self.username) + " pk: " + str(self.pk)
    

class Event(models.Model):
    event_name = models.CharField(max_length=255)
    event_description = models.CharField(max_length=255)
    event_id = models.CharField(max_length=255,default=101)
    event_start = models.DateTimeField()
    event_end = models.DateTimeField()
    group_event = models.BooleanField(default=False)
    event_rules =  models.TextField(null=True)
    event_cost = models.IntegerField(default=0)


    def __str__(self):
        return str(self.event_name) + " pk:" + str(self.pk)

class Order(models.Model):
    player_id = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    transaction_id = models.IntegerField(default=0)
    order_date = models.DateTimeField(auto_now_add=True)
    payment_verified = models.BooleanField(default=False)

    def __str__(self):
        return str(self.pk)
    
class Referral(models.Model):
    timestamp = models.DateTimeField(default=timezone.now)
    referrer = models.ForeignKey(User, on_delete=models.CASCADE,null=True, related_name='referrals')
    referred_user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, related_name='referred_by')
    referral_code = models.CharField(max_length=50, null=True)
    settled = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.id}"

    def invite_completed(self) -> None:
        self.settled = True
        self.save()

    @classmethod
    def save_invite_referral( cls,
        referrer: User,
        referee: User,
        code: str,):
        res = cls.objects.create(
             referrer=referrer,
             referred_user=referee,
             referral_code=code,
             settled=True,
         )
        
        return res


