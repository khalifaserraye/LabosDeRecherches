from django.db import models

# Create your models here.

class Livre(models.Model):
    title = models.CharField(max_length=100)
    auteur = models.CharField(max_length=70)
    description = models.CharField( max_length=255)