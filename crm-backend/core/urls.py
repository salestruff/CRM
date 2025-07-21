from django.contrib import admin
from django.urls import path, include  # ✅ include is needed

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('crm.urls')),  # ✅ include your app's urls
]
