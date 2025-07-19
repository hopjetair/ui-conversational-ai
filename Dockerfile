# Use the official Node.js image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 8075

# Start the application by serving the built files
CMD ["serve", "-s", "build", "-l", "8075"]