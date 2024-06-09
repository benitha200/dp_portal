from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15, blank=True)
    institution = models.CharField(max_length=255, blank=True)
    role=models.CharField(max_length=255,blank=True)

    def __str__(self):
        return self.user.username

