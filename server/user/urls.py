from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import *

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path("refresh/", TokenRefreshView.as_view(), name="refresh-token"),
    path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('referral-verify/', VerifyReferralCodeView.as_view(), name="referral-verify"),
    path("events/", EventsDetail.as_view(), name="events"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("leaderboard/", LeaderboardView.as_view(), name="leaderboard"),
    # team
    path("generate-team/", GenerateTeamCodeView.as_view(), name="generate-team"),
    path("join-team/", JoinTeamView.as_view(), name="join-team"),
    path("view-team/", TeamView.as_view(), name="team-view"),
    # order
    path("orders/", OrderView.as_view(), name="orders"),
    path("placeorder/", PlaceOrderView.as_view(), name="place-order"),
    # offline registration
    path("offline-register/", RegisterPlayerView.as_view(), name="offline-register"),
    path("offline-order/", OfflineOrderView.as_view(), name="offline-order"),
    # Transaction (Admin view)
    path("transaction-list/", TransactionListView.as_view(), name="transaction-list"),
    path("transaction-confirm/", TransactionConfirmView.as_view(), name="transaction-confirm"),
]