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
    list_display = ("name", "mobile_number", "events", "order_date", "payment", "transaction_id", "amount")

    def events(self, obj):
        if obj.event.all():
            return list(obj.event.all().values_list('event_name', flat=True))
        else:
            return 'NA'
        
    def name(self, obj):
        return obj.user.full_name
    
    def mobile_number(self, obj):
        return obj.user.phone
    
@admin.register(Team)
class TeamAdmin(ImportExportActionModelAdmin):
    list_display = ("get_event", "get_user")

    def get_event(self, obj):
        if obj.event.all():
            return list(obj.event.all().values_list('event_id', flat=True))
        return 'NA'
    
    def get_user(self, obj):
        if obj.user.all():
            return list(obj.user.all().values_list('full_name', flat=True))

