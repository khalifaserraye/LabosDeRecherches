from .models import NewUser
from rest_framework import serializers


#class UserSerializer(serializers.HyperlinkedModelSerializer):
#    class Meta:
#        model = User
#        fields = ['url', 'username', 'email', 'groups']
#
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = NewUser
        fields = ['url', 'user_name', 'email', 'user_type' , 'first_name']
