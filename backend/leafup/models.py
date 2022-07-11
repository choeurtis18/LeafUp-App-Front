# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Comment(models.Model):
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey('Post', models.DO_NOTHING, related_name='comments')
    user = models.ForeignKey('User', models.DO_NOTHING, related_name='comments')

    class Meta:
        managed = False
        db_table = 'comment'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class ImgUser(models.Model):
    img = models.TextField()

    class Meta:
        managed = False
        db_table = 'img_user'


class Plants(models.Model):
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    species = models.ForeignKey('Species', models.DO_NOTHING, related_name='plants')
    last_watering = models.DateTimeField()
    temp = models.FloatField()
    user = models.ForeignKey('User', models.DO_NOTHING, related_name='plants')

    class Meta:
        managed = False
        db_table = 'plants'


class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('User', models.DO_NOTHING, related_name='posts')
    nb_likes = models.IntegerField(default='0', editable=False)
    img = models.TextField()

    class Meta:
        managed = False
        db_table = 'post'


class PostLike(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    post = models.ForeignKey(Post, models.DO_NOTHING)
    likes = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'post_like'


class RecordPost(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    post = models.ForeignKey(Post, models.DO_NOTHING)
    record = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'record_post'


class Species(models.Model):
    name = models.CharField(max_length=255)
    req_humidity_air = models.DecimalField(max_digits=10, decimal_places=0)
    req_light = models.IntegerField()
    req_dirt_humidity = models.DecimalField(max_digits=10, decimal_places=0)
    req_amb_temp = models.IntegerField()
    req_watering_day = models.TextField()
    img = models.TextField()

    class Meta:
        managed = False
        db_table = 'species'


class User(models.Model):
    lastname = models.CharField(db_column='lastName', max_length=200)  # Field name made lowercase.
    firstname = models.CharField(db_column='firstName', max_length=200)  # Field name made lowercase.
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField()
    pseudo = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'user'


class UserPlants(models.Model):
    user = models.ForeignKey(User, models.DO_NOTHING)
    plant = models.ForeignKey(Plants, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'user_plants'
