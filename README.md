# DevConnector 2.0
Small social network for developers

This is a MERN stack application from the "MERN Stack Front To Back" course on Udemy. It is a small social network app that includes authentication, profiles and forum posts.

Quick Start
# change default.json file in cofig folder

# this file is located in config/default.json

# add uri of your mongodb connection for example

 "mongoURI": "mongodb://localhost/dev-social",
 
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
