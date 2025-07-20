from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.name

class Contact(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    message = models.TextField()
    contact_date = models.DateTimeField(auto_now_add=True)

class Opportunity(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    stage = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    close_date = models.DateField()

class Task(models.Model):
    title = models.CharField(max_length=255)
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    due_date = models.DateField()
    completed = models.BooleanField(default=False)

class Invoice(models.Model):
    lead = models.ForeignKey(Lead, on_delete=models.CASCADE)
    issue_date = models.DateField()
    due_date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, default="Pending")
class Billing(models.Model):
    invoice = models.ForeignKey('Invoice', on_delete=models.CASCADE)
    billing_date = models.DateField(auto_now_add=True)
    payment_method = models.CharField(max_length=100)
    transaction_id = models.CharField(max_length=255)
    amount_paid = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50, default='Paid')

    def _str_(self):
        return f"{self.invoice.id} - {self.transaction_id}"