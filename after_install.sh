#!/bin/bash
cd /
npm install --force
npm i react-password-strength-bar --force

npm run build
cp -rf build/* /usr/share/nginx/html/
