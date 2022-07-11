"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from django.urls import path, include
from rest_framework import routers
from leafup import views

router = routers.DefaultRouter()
router.register(r'comments', views.CommentView)
router.register(r'imgusers', views.ImgUserView)
router.register(r'plants', views.PlantsView)
router.register(r'posts', views.PostView)
router.register(r'postlikes', views.PostLikeView)
router.register(r'recordposts', views.RecordPostView)
router.register(r'species', views.SpeciesView)
router.register(r'users', views.UserView)
router.register(r'userplants', views.UserPlantsView)
router.register(r'commentbypost', views.CommentByPostView)
router.register(r'postbyusers', views.PostByUserView)
##router.register(r'plantspe', views.SpeciesForPlantsView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
