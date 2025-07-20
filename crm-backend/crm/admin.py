from django.contrib import admin
from .models import Lead, Contact, Opportunity, Task, Invoice, Billing

admin.site.register(Lead)
admin.site.register(Contact)
admin.site.register(Opportunity)
admin.site.register(Task)
admin.site.register(Invoice)
admin.site.register(Billing)