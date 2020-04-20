#!/bin/bash

# uncomment express.js testing api
sed -i '/^\/\/.*3000.*/s/^\/\///' routes/app/views/js/utils.js
