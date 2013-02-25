#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Deploy Angular Spotify App : "$1
echo "-------------------------------------------------------------------"


killall spotify
cp -r $BASE_DIR/../app ~/Spotify/$1
spotify >/dev/null 2>&1 &

