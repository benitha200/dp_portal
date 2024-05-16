# courses/serializers.py
from rest_framework import serializers
from .models import Course, Module, Content

class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Content
        fields = ('id', 'content_type', 'text_content', 'video_url', 'order')
class CourseSerializer(serializers.ModelSerializer):
    # modules = ModuleSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ('id', 'title', 'description', 'created_at', 'modules')
class ModuleSerializer(serializers.ModelSerializer):
    contents = ContentSerializer(many=True, read_only=True)
    # course = CourseSerializer(many=True, read_only=True)


    class Meta:
        model = Module
        fields = ('id', 'title', 'description', 'order', 'contents','course_id')

