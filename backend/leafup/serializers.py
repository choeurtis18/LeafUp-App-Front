from rest_framework import serializers
from .models import Comment, ImgUser, Plants, Post, PostLike, RecordPost, Species, User, UserPlants


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'content', 'date', 'post', 'user')


class ImgUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImgUser
        fields = ('id', 'img')


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content', 'created_at', 'user', 'nb_likes', 'img')


class PostLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostLike
        fields = ('user', 'post', 'likes')


class RecordPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecordPost
        fields = ('user', 'post', 'record')


class SpeciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = (
            'id', 'name', 'req_humidity_air', 'req_light', 'req_dirt_humidity', 'req_amb_temp', 'req_watering_day',
            'img')


class PlantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plants
        fields = ('id', 'name', 'created_at', 'species', 'last_watering', 'temp', 'user')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'lastname', 'firstname', 'email', 'password', 'created_at', 'pseudo')


class UserPlantsSerializer(serializers.ModelSerializer):
    plants = PlantsSerializer(many=True, read_only=True)


    class Meta:
        model = User
        fields = ['plants']


class PostByUserSerializer(serializers.ModelSerializer):
    posts = PostSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'lastname', 'firstname', 'posts']


class CommentByPostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['comments']


class SpeciesForPlantsSerializer(serializers.ModelSerializer):
    species = SpeciesSerializer(many=True, read_only=True)

    class Meta:
        model = Plants
        fields = ['species']
