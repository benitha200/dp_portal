"""
URL configuration for main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# elearning_platform/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from courses.views import CourseViewSet, ModuleViewSet, ContentViewSet
from assessments.views import  QuestionViewSet
from applications.views  import *
from .views import *

router = DefaultRouter()
router.register('courses', CourseViewSet)
router.register('modules', ModuleViewSet)
router.register('contents', ContentViewSet)
# router.register('assessments', AssessmentViewSet)
router.register('questions', QuestionViewSet)
# router.register('answers', AnswerViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),

    # Data Processor
    path('data-processor/', DataProcessorAPIView.as_view(), name='data-processor-list'),
    path('data-processor/<int:pk>/', DataProcesssorDetailAPIView.as_view(), name='data-processor-detail'),
    path('data-processor/<int:pk>/approve/', DataProcessorApprovalAPIView.as_view(), name='data-processor-approve'),
    path('data-processor/<int:pk>/reject/', DataProcessorRejectAPIView.as_view(), name='data-processor-approve'),


    # Data Controller
    
    path('data-controller/', DataControllerAPIView.as_view(), name='data-controller-list'),
    path('data-controller/<int:pk>/', DataControllerDetailAPIView.as_view(), name='data-controller-detail'),
    path('data-controller/<int:pk>/approve/', DataControllerApprovalAPIView.as_view(), name='data-controller-approve'),
    path('data-controller/<int:pk>/reject/', DataControllerRejectAPIView.as_view(), name='data-controller-approve'),

    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]