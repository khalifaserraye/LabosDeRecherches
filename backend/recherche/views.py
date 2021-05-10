from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProjetSerializer
from .models import Projet
# Create your views here.
class ProjetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Projet.objects.all()
    serializer_class = ProjetSerializer
    permission_classes = [permissions.IsAuthenticated]
