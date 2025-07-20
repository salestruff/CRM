from django.urls import path
from api.views import hello

urlpatterns = [
    path('api/hello', hello),
]
