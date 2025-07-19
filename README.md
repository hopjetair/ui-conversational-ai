# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

###  Step 1: clone the repo and run the command `npm install`
This will install the dependencies.
### Step 2: run the command `npm start`

Runs the app in the development mode.\
Open [http://localhost:8075](http://localhost:8075) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console .


###   Run using docker file

docker build -t conversational-ai .

docker run -p 8075:8075 conversational-ai

Access your ui app at http://localhost:8075.

###   Run using docker compose file file

docker compose up --build

Access your ui app at http://localhost:8075.


###   closing docker prpcesses

docker stop $(docker ps -q)

docker rm $(docker ps -aq)

docker rmi $(docker images -q)

### docker troubleshooting

docker builder prune

docker pull node:20-alpine

On macOS (docker restart)

If none of the above works, consider reinstalling Docker to ensure a clean setup.



