from rest_framework import routers
from .api import InstructorViewSet, CourseViewSet

router = routers.DefaultRouter()
router.register('api/course', CourseViewSet, 'course')

urlpatterns = router.urls
