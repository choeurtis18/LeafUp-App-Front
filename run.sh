#!/usr/bin/env bash

echo "Shell start"

cd ./backend/ && python manage.py runserver &
echo "Server start"

cd ./backend/liaison-arduino && python test.py &
echo "Arduino start"