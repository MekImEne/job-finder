# Dockerfile
ARG NODEJS_IMAGE

# Use an official Node.js runtime as a parent image
FROM ${NODEJS_IMAGE}

# Set the working directory to /app
WORKDIR /app

# Install OpenJDK
#RUN apk --no-cache add openjdk8 bash

# Set the JAVA_HOME environment variable
#ENV JAVA_HOME=/usr/lib/jvm/java-1.8-openjdk

# Add JAVA_HOME to the PATH
#ENV PATH="$PATH:$JAVA_HOME/bin"

# Install React Native CLI globally
#RUN npm install -g react-native-cli

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the entire app directory to the working directory
COPY . .

# Expose port 8081 for the React Native packager
EXPOSE 8081

# Start the app 
CMD [ "yarn", "start" ]
