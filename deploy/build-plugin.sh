#!/bin/bash

echo 'Starting building plugin'
echo '*****************'

# Clone Kibana source code in "kibana" folder
# git clone https://github.com/elastic/kibana.git kibana --progress


# Kibana version for CUTLER project is pre-agreed to 7.4.0
# Change to branch 7.4 which represents Kibana version 7.4.0
cd kibana && git checkout 7.4

# Create required plugins directory where we will place our plugin
# through symbolic link
mkdir -p plugins/Draxis-map-layers-kibana-plugin

cd plugins/Draxis-map-layers-kibana-plugin/

# Create link between "/source" directory, where the plugin source code is 
# and the current working (required) directory
ln -s /source/* $(pwd)

echo 'Starting bootstraping plugin'

# Start bootstraping plugin (take's 5 minutes)
yarn kbn bootstrap

# Build the plugin, entering "7.4.0" in the 
# prompt asking Kibana version of "yarn build" command
echo '7.4.0' | yarn build

# If it's successfully been built the output zip file is under /build directory
# So we need to copy it to the mounted directory "/dist" we defined in docker-compose
# in order to get it
cd build/ && cp -r . /dist

echo 'Successfully built the plugin!'
echo 'To get it look under your /dist directory!'
