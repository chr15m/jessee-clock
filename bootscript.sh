#!/bin/sh

# Gets run from /opt/bootlocal.sh

# get into correct folder
cd `dirname $0`
# launch main script
n=/home/tc/.nvm/versions/node/*/bin/node
$n clock.js
