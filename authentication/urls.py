from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import UserCreateAPIView, TokenObtainPairView

urlpatterns = [
    path('register/', UserCreateAPIView.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
