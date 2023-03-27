from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import *

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path("refresh/", TokenRefreshView.as_view(), name="refresh-token"),
    path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path("events/", EventsDetail.as_view(), name="events"),
    path("add-member/", RegisterTeamView.as_view(), name="add-team-member"),
    path("remove-member/", RemoveUserFromTeamView.as_view(), name="remove-team-member"),
    path("orders/", OrderView.as_view(), name="orders"),
    path("placeorder/", PlaceOrderView.as_view(), name="place-order"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("leaderboard/", LeaderboardView.as_view(), name="leaderboard"),
]