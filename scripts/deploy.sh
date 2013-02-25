#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Deploy Angular Spotify App : "$1
echo "-------------------------------------------------------------------"


killall spotify
rm -r ~/Spotify/$1
cp -r $BASE_DIR/../app ~/Spotify/$1
spotify >/dev/null 2>&1 &

