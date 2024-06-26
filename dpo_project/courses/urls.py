# courses/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, ModuleViewSet
# from assessments.views import  AssessmentViewSet, CertificateViewSet
from assessments.views import QuestionViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'modules', ModuleViewSet)
router.register(r'assessments', QuestionViewSet)
# router.register(r'certificates', CertificateViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
