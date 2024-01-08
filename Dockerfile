# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install React Native CLI
RUN npm install -g react-native-cli

# Copy package.json and yarn.lock to the container
COPY package*.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the entire project to the container
COPY . .

# Expose the port your app will run on
EXPOSE 8081

# Start your app
CMD ["yarn", "start"]
