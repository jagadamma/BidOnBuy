#!/bin/bash
cd /
rm -rf node_modules
rm -rf package-lock.json
npm install --force
npm i react-password-strength-bar --force

npm run build
cp -rf build/* /usr/share/nginx/html/
