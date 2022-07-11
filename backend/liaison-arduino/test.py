import pyfirmata
import time
import requests
import time


port = '/dev/cu.usbserial-110'  # Windows (à adapter par rapport à votre ordinateur)
board = pyfirmata.Arduino(port)  # Permet d’ouvrir le port associer

temperature_pin = board.get_pin('a:0:A1')  # Permet d’initialiser la broche utilisée
iterator = pyfirmata.util.Iterator(board)  # Permet d’initialiser la liaison entre Python et Arduino
iterator.start()  # Démarrage de la connexion
temperature_pin.enable_reporting()  # Lecture des valeurs de la broche choisie

while temperature_pin.read() is None: var = None # Tant qu’il n’y a pas de valeurs

try:
    while True:  # Boucle infinie
        print("Celsius :", temperature_pin.read())  # On affiche les valeurs lues par la broche
        #Celsius = ((temperature_pin.read() * 5 - 0.5) * 100)  # Transforme ces valeurs en Celsius
        #print("température en Celsius :", (round(Celsius, 4)))  # Arrondit et affiche la température

        if temperature_pin.read() > 0 :

            url = "http://localhost:8000/api/plants/1/"
            headers = {"Content-Type": "application/json;"}

            # A remplacer par la valeur du capteur
            temp = temperature_pin.read()

            data = {
                "name": "test shell",
                "created_at": "2022-07-7T01:51:42.000Z",
                "species": "1",
                "last_watering": "2022-07-7T01:51:42.000Z",
                "temp": temp
            }

            response = requests.put(url, headers=headers, json=data)

            while True:
                print("Status Code: ", response.status_code)
                time.sleep(5)

        time.sleep(1)  # Fait une pause de 1 seconde entre deux mesures
except:
    temperature_pin.disable_reporting()  # Arrête la lecture de la broche
    board.exit()
