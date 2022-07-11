import faker.providers
from django.core.management.base import BaseCommand
from faker import Faker
from ...models import Comment, Plants, Post, Species, User


LIST_PLANT_NAME = [
    "Abelia",
    "Abricotier du japon",
    "Abutilon",
    "Aloès (Aloe)",
    "Bruyère",
    "Buddléia",
    "Bulbine",
    "Cactus"
    "Ficus",
    "Fraisier (Fragaria)",
    "Héliotrope (Heliotropium)"
]

LIST_SPECIES_NAME = [
    "Arbre",
    "Arbres fruitier",
    "Buisson",
    "Plante tropicales",
    "Plantes grasses" 
]

class PersonalProvider(faker.providers.BaseProvider):
    def plants_name(self):
        return self.random_element(LIST_PLANT_NAME)

    def species_name(self):
        return self.random_element(LIST_SPECIES_NAME)


# creation of command to fake data
class Command(BaseCommand):
    help = "Command information"

    def handle(self, *args, **kwargs):

        fake = Faker(["fr_FR"])
        fake.add_provider(PersonalProvider)

        # print(fake.species_name())
        for _ in range(10):
            plant_name = fake.unique.plants_name()
            species_name = fake.unique.species_name()

            Comment.objects.create(
                content = fake.sentence(nb_words=10, variable_nb_words=False),
                date = fake.date_time_this_year(),
            )

            Plants.objects.create(
                name = plant_name, 
                created_at = fake.date_time_this_year(), 
                species = fake.random_int(min=1, max=5, step=1),
                last_watering = fake.date_this_month()
            )

            Post.objects.create(
                title = fake.text(max_nb_chars=10),
                content = fake.sentence(nb_words=10, variable_nb_words=False),
                date = fake.date_time_this_year(),
                nb_likes = fake.random_int(min=-10, max=150),
                img = fake.file_name(category='image')
            )

            Species.objects.create(
                name = species_name,
                req_humidity_air = fake.pyfloat(left_digits=2, right_digits=2, positive=False, min_value=0, max_value=100),
                req_light = fake.random_int(min=0, max=100, step=1),
                req_dirt_humidity = fake.pyfloat(left_digits=2, right_digits=2, positive=False, min_value=0, max_value=100),
                req_amb_temp = fake.random_int(min=0, max=100, step=1),
                req_watering_day = fake.random_int(min=0, max=100, step=1),
                img = fake.file_name(category='image')
            )

            User.objects.create(
                last_name = fake.last_name(),
                first_name = fake.first_name(),
                email = fake.email(),
                password = fake.pystr(),
                token = fake.pystr(),
                created_at = fake.date_time_this_year(),
                pseudo = fake.user_name()
            )