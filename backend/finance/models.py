from django.db import models

# Create your models here.

class Besoin(models.Model):
    type_besoin = models.CharField(max_length=100)
    quantite = models.IntegerField()
    prix = models.IntegerField()