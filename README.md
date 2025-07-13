# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

###  Step 1: clone the repo and run the command `npm install`
This will install the dependencies.
### Step 2: run the command `npm start`

Runs the app in the development mode.\
Open [http://localhost:4001](http://localhost:4001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console .


###   Run using docker file

docker build -t conversational-ai .

docker run -p 4001:4001 conversational-ai

Access your ui app at http://localhost:4001.

###   Run using docker compose file file

docker compose up --build

Access your ui app at http://localhost:4001.


###   closing docker prpcesses

docker stop $(docker ps -q)

docker rm $(docker ps -aq)

docker rmi $(docker images -q)

