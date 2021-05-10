from rest_framework import serializers
from .models import Livre


class LivreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Livre
        fields = ['url','title', 'auteur', 'description']
