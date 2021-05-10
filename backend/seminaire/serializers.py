from rest_framework import serializers
from .models import Seminaire


class SeminaireSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Seminaire
        fields = ['title', 'date_debut' , 'date_fin' , 'addresse']
