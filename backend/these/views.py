from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TheseSerializer
from .models import These
# Create your views here.
class TheseViewSet(viewsets.ModelViewSet):
    """
    
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = TheseSerializer
    queryset = These.objects.all()
    
    permission_classes = [permissions.IsAuthenticated]
