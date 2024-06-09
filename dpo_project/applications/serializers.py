from rest_framework import serializers
from .models import *

class DataProcessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataProcessor
        fields = '__all__'


class DataCOntrollerSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataController
        fields = '__all__'
