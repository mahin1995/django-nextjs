from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views import MyTokenObtainPairView
urlpatterns = [

    path('api/gettoken/', MyTokenObtainPairView.as_view()),
    
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/verify/', TokenVerifyView.as_view() ),

]