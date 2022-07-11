from django.contrib import admin
from .models import Comment, ImgUser, Plants, Post, PostLike, RecordPost, Species, User, UserPlants


class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'date', 'post', 'user')


class ImgUserAdmin(admin.ModelAdmin):
    display = 'img'


class PlantsAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'species', 'last_watering')


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'created_at', 'user', 'nb_likes', 'img')


class PostLikeAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'likes')


class RecordPostAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'record')


class SpeciesAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'req_humidity_air', 'req_light', 'req_dirt_humidity', 'req_amb_temp', 'req_watering_day', 'img')


class UserAdmin(admin.ModelAdmin):
    list_display = ('lastname', 'firstname', 'email', 'password', 'created_at', 'pseudo')


class UserPlantsAdmin(admin.ModelAdmin):
    list_display = ('user', 'plant')


# Register your models here.

admin.site.register(Comment, CommentAdmin)
admin.site.register(ImgUser, ImgUserAdmin)
admin.site.register(Plants, PlantsAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(PostLike, PostLikeAdmin)
admin.site.register(RecordPost, RecordPostAdmin)
admin.site.register(Species, SpeciesAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(UserPlants, UserPlantsAdmin)
