"""back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken
from authenticate import views as authViews
#from chercheur import views as chercheurViews
#from doctorant import views as doctorantViews
from biblioteque import views as bibViews
from finance import views as finViews
from recherche import views as projetViews
from seminaire import views as seminaireViews
from these import views as theseViews
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'users', authViews.UserViewSet)
#router.register(r'chercheurs', chercheurViews.ChercheurViewSet)
#router.register(r'doctorants', doctorantViews.DoctorantViewSet)
router.register(r'livres', bibViews.LivreViewSet)
router.register(r'besoins', finViews.BesionViewSet)
router.register(r'projets', projetViews.ProjetViewSet)
router.register(r'seminaires', seminaireViews.SeminaireViewSet)
router.register(r'theses', theseViews.TheseViewSet)



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/', ObtainAuthToken.as_view()),
]

