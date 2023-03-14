from django.contrib import admin
from import_export.admin import ImportExportActionModelAdmin
from .models import *

@admin.register(Event)
class EventAdmin(ImportExportActionModelAdmin):
    list_display = ("event_id", "event_name", "event_start", "event_end", "group_event")

@admin.register(User)
class UserAdmin(ImportExportActionModelAdmin):
    list_display = ("username", "full_name", "phone", "coins", "senior", "referral")

@admin.register(Referral)
class ReferralAdmin(ImportExportActionModelAdmin):
    list_display = ("referrer", "referred_user", "timestamp", "referral_code")

@admin.register(Order)
class OrderAdmin(ImportExportActionModelAdmin):
    list_display = ("event", "player_id", "order_date", "payment_verified")