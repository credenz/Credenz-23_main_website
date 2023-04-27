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

@admin.register(Order)
class OrderAdmin(ImportExportActionModelAdmin):
    raw_id_fields = ('event',)
    list_display = ('id', 'user', 'event', 'order_date', 'payment', 'transaction_id')
    
class TeamResource(resources.ModelResource):
    event_name = fields.Field(attribute='event__event_name', column_name='Event Name')
    usernames = fields.Field()
    team_id  = fields.Field(attribute='team_id', column_name='Team ID')

    class Meta:
        model = Team
        fields = ('event_name', 'usernames', 'team_id')
    
    def dehydrate_usernames(self, team):
        return ", ".join([user.username for user in team.user.all()])

@admin.register(Team)
class TeamAdmin(ImportExportActionModelAdmin):
    resource_class = TeamResource
    list_display = ("event_name", "users", "team_id", "team_name")
    search_fields = ("event__event_name", "user__username")
    list_filter = ('event',)

    def event_name(self, obj):
        if obj.event:
            return obj.event.event_name
        else:
            return 'NA'
    
    def users(self, obj):
        if obj.user:
            full_names = [f"{user.first_name} {user.last_name}" for user in obj.user.all()]
            return ", ".join(full_names)
        else:
            return 'NA'
        
class TransactionResource(resources.ModelResource):
    user_name = fields.Field(attribute='user__full_name', column_name='Full name')
    transaction_id = fields.Field(attribute='transaction_id', column_name='Transaction Id')
    order_date = fields.Field(attribute='order_date', column_name='Order Date')
    event_list = fields.Field(attribute='event_list', column_name='Event List')

    class Meta:
        model = Transaction
        fields = ('user_name', 'transaction_id', 'order_date', 'event_list')

@admin.register(Transaction)
class TransactionAdmin(ImportExportActionModelAdmin):
    resource_class = TransactionResource
    list_display = ("user_name", "transaction_id", "order_date", 'event_list', 'amount', 'payment')

    def user_name(self, obj):
        return obj.user.full_name
    
@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'context')
