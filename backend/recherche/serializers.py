from rest_framework import serializers
from .models import Projet


class ProjetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Projet
        fields = ['title', 'description']
