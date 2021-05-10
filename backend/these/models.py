from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.

class These(models.Model):
    title = models.CharField(max_length=200)
    validated = models.BooleanField(default=False)
    encadreur = models.CharField(max_length=40)
    year = models.CharField(max_length=20)
    description = models.CharField(max_length=1500 , default='')
    objectif = models.CharField(max_length=1500 , default='')
    results = models.CharField(max_length=1500 , default='')
    emailPromoteur = models.EmailField(_('email address'))