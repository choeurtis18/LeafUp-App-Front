from django.shortcuts import render
from requests import Response
from rest_framework import viewsets
from .serializers import CommentSerializer, ImgUserSerializer, PlantsSerializer, PostSerializer, PostLikeSerializer, \
    RecordPostSerializer, SpeciesSerializer, UserSerializer, UserPlantsSerializer, PostByUserSerializer, \
    CommentByPostSerializer, SpeciesForPlantsSerializer
from .models import Comment, ImgUser, Plants, Post, PostLike, RecordPost, Species, User, UserPlants


# Create your views here.

class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class ImgUserView(viewsets.ModelViewSet):
    serializer_class = ImgUserSerializer
    queryset = ImgUser.objects.all()


class PlantsView(viewsets.ModelViewSet):
    serializer_class = PlantsSerializer
    queryset = Plants.objects.all()


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class PostLikeView(viewsets.ModelViewSet):
    serializer_class = PostLikeSerializer
    queryset = PostLike.objects.all()


class RecordPostView(viewsets.ModelViewSet):
    serializer_class = RecordPostSerializer
    queryset = RecordPost.objects.all()


class SpeciesView(viewsets.ModelViewSet):
    serializer_class = SpeciesSerializer
    queryset = Species.objects.all()


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserPlantsView(viewsets.ModelViewSet):
    serializer_class = UserPlantsSerializer
    queryset = User.objects.all()


class PostByUserView(viewsets.ModelViewSet):
    serializer_class = PostByUserSerializer
    queryset = User.objects.all()


class CommentByPostView(viewsets.ModelViewSet):
    serializer_class = CommentByPostSerializer
    queryset = Post.objects.all()


class SpeciesForPlantsView(viewsets.ModelViewSet):
    serializer_class = SpeciesForPlantsSerializer
    queryset = Plants.objects.all()
