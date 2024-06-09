from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Profile
from .serializers import UserSerializer, LoginSerializer, ProfileSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        user = serializer.save()
        profile_data = self.request.data.get('profile', {})
        if not Profile.objects.filter(user=user).exists():
            Profile.objects.create(user=user, **profile_data)
        else:
            profile = user.profile
            profile.phone_number = profile_data.get('phone_number', profile.phone_number)
            profile.institution = profile_data.get('institution', profile.institution)
            profile.role = profile_data.get('role', profile.role)
            profile.save()


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                # Get user profile
                profile = user.profile
                # Serialize user data including profile fields
                user_data = {
                    'username': user.username,
                    'email': user.email,
                    'phone_number': profile.phone_number,
                    'institution': profile.institution,
                    'role':profile.role
                }
                return Response(user_data, status=status.HTTP_200_OK)
            return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
