from rest_framework import serializers
from .models import Besoin


class BesoinSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Besoin
        fields = ['url','type_besoin', 'quantite', 'prix']
