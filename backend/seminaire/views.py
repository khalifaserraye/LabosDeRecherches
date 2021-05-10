from rest_framework import viewsets
from rest_framework import permissions
from .serializers import SeminaireSerializer
from .models import Seminaire
# Create your views here.
class SeminaireViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Seminaire.objects.all()
    serializer_class = SeminaireSerializer
    permission_classes = [permissions.IsAuthenticated]
