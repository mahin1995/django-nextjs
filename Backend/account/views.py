from copy import error
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from django.contrib.auth.models import User
from .serializers import UserSerializer

# Create your views here.


class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            data = request.data
            first_name = data['first_name']
            last_name = data['last_name']
            username = data['username']
            password = data['username']
            re_password = data['username']
            if (password == re_password):
                if(len(password)) >0:
                    if not User.objects.filter(username=username).exists():
                        user = User.objects.create_user(
                            first_name=first_name,
                            last_name=last_name,
                            username=username,
                            password=password

                        )
                        user.save()
                        if User.objects.filter(username=username).exists():
                            return Response({"error": "User Successfully Created"},
                                            status=status.HTTP_201_CREATED
                                            )
                        else:
                            return Response({"error": "Something Wrong in server"},
                                            status=status.HTTP_500_INTERNAL_SERVER_ERROR
                                            )
                    else:
                        return Response({"error": "User name already exist"},
                                        status=status.HTTP_400_BAD_REQUEST
                                        )
                else:
                    return Response(
                        {"error": "Password Must be 8 correcter"},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            else:
                return Response(
                    {"error": "Password Doesn't Match"},
                    status=status.HTTP_400_BAD_REQUEST
                )
        except Exception as e:
            print(e)
            return Response(
                {"error": "Something went wrong when trying to register account"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )



class LoadUserView(APIView):
    def get(self,request,format=None):
        try:
            user=request.user
            user=UserSerializer(user)
            return Response({"user":user.data},status=status.HTTP_200_OK)
        except:
            return Response(
                {"error":"Something went wrong when trying to load user"},
                 status=status.status.HTTP_500_INTERNAL_SERVER_ERROR
            )