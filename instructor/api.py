from rest_framework import viewsets, permissions
from .models import Instructor,Course
from .serializers import InstructorSerializer, CourseSerializer

class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InstructorSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]    
    serializer_class = CourseSerializer