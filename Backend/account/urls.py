from django.urls import path

from account.views import RegisterView,LoadUserView

urlpatterns = [

    path('register', RegisterView.as_view()),
    path('userView', LoadUserView.as_view()),


]