from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter() # [cite: 63]
router.register(r'categories', CategoryViewSet) # [cite: 64]
router.register(r'products', ProductViewSet) # [cite: 64]

urlpatterns = [
    path('', include(router.urls)),
]