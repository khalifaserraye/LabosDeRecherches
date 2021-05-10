from django.db import models

# Create your models here.

class Seminaire(models.Model):
    title = models.CharField(max_length=100)
    date_debut = models.DateField(auto_now=False, auto_now_add=False)
    date_fin = models.DateField(auto_now=False, auto_now_add=False)
    addresse = models.CharField(max_length=100)
   