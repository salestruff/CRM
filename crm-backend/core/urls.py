from django.contrib import admin
from django.urls import path
from crm.views import hello

urlpatterns = [
    path('admin/', admin.site.urls),
    
   
]
