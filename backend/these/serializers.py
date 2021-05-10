from rest_framework import serializers
from .models import These


class TheseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = These
        fields = ['url' ,'title', 'validated' , 'encadreur' , 'year' ,'emailPromoteur' , 'description' ,  'objectif' ,  'results']
    