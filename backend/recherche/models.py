from django.db import models

# Create your models here.

class Projet(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=50)
   