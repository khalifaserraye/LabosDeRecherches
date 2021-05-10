from rest_framework import viewsets
from rest_framework import permissions
from .serializers import BesoinSerializer
from .models import Besoin
# Create your views here.
class BesionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Besoin.objects.all()
    serializer_class = BesoinSerializer
    permission_classes = [permissions.IsAuthenticated]
