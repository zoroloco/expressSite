#!/bin/sh
# Grabs latest code from github, builds and executes.
# move this file to: /usr/local/src and chmod +x update-raspatron.sh
#

clear

echo "DO NOT RUN AS ROOT!"

echo "Stopping raspatron web"
sudo /etc/init.d/raspatron-web.sh stop

echo "Executing update script for raspatron-web..."

sudo rm -rf /usr/local/src/raspatron-web
sudo git clone https://github.com/zoroloco/raspatron-web.git /usr/local/src/raspatron-web

echo "Now installing dependencies."
cd /usr/local/src/raspatron-web
sudo npm install

echo "Now updating/syncing with bower."
bower install

echo "making scripts executable"
chmod +x /usr/local/src/raspatron-web/raspatron-web.sh

echo "moving and updating startup script"
sudo cp /usr/local/src/raspatron-web/rpi/etc/init.d/raspatron-web.sh /etc/init.d/
sudo chmod +x /etc/init.d/raspatron-web.sh
sudo update-rc.d raspatron-web.sh defaults

echo "Now running raspatron-web."
/usr/local/src/raspatron-web/raspatron-web.sh
