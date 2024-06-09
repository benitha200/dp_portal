# views.py

from rest_framework import viewsets
from .models import Question, UserResponse
from .serializers import QuestionSerializer, UserResponseSerializer
from rest_framework.permissions import IsAuthenticated

class QuestionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class UserResponseViewSet(viewsets.ModelViewSet):
    queryset = UserResponse.objects.all()
    serializer_class = UserResponseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserResponse.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
