from django.contrib import admin
from import_export.admin import ImportExportActionModelAdmin
from import_export import resources
from import_export import fields, resources
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

class OrderResource(resources.ModelResource):
    username = fields.Field(attribute='user__username', column_name='Username')
    event_name = fields.Field()
    amount = fields.Field(attribute='amount', column_name='Amount')
    transaction_id = fields.Field(attribute='transaction_id', column_name='Transaction Id')
    order_date = fields.Field(attribute='order_date', column_name='Order Date')

    class Meta:
        model = Team
        fields = ('event_name', 'username', 'amount', 'transaction_id', 'order_date')
    
    def dehydrate_event_name(self, order):
        return ", ".join([event.event_name for event in order.event.all()])

@admin.register(Order)
class OrderAdmin(ImportExportActionModelAdmin):
    resource_class = OrderResource
    list_display = ("name", "mobile_number", "events", "order_date", "payment", "transaction_id", "amount")
    search_fields = ("event__event_name", "user__username")
    list_filter = ('event',)

    def events(self, obj):
        if obj.event.all():
            return list(obj.event.all().values_list('event_name', flat=True))
        else:
            return 'NA'
        
    def name(self, obj):
        return obj.user.full_name
    
    def mobile_number(self, obj):
        return obj.user.phone
    
class TeamResource(resources.ModelResource):
    event_name = fields.Field(attribute='event__event_name', column_name='Event Name')
    usernames = fields.Field()

    class Meta:
        model = Team
        fields = ('event_name', 'usernames')
    
    def dehydrate_usernames(self, team):
        return ", ".join([user.username for user in team.user.all()])

@admin.register(Team)
class TeamAdmin(ImportExportActionModelAdmin):
    resource_class = TeamResource
    list_display = ("id", "event_name", "get_user")
    search_fields = ("event__event_name", "user__username")
    list_filter = ('event',)

    def event_name(self, obj):
        if obj.event:
            return obj.event.event_name
        else:
            return 'NA'
    
    def get_user(self, obj):
        if obj.user:
            return list(obj.user.all().values_list('username', flat=True))
        else:
            return 'NA'



