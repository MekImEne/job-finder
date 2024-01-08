# Dockerfile
ARG NODEJS_IMAGE

# Use an official Node.js runtime as a parent image
FROM ${NODEJS_IMAGE}

# Set the working directory to /app
WORKDIR /app

# Install required dependencies
#RUN apt-get update && \
#    apt-get install -y wget gnupg

# Install AdoptOpenJDK 8
#RUN wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add - && \
#    echo "deb https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/ buster main" > /etc/apt/sources.list.d/adoptopenjdk.list && \
#    apt-get update && \
#    apt-get install -y adoptopenjdk-8-hotspot

# Set the JAVA_HOME environment variable
#ENV JAVA_HOME /usr/lib/jvm/adoptopenjdk-8-hotspot-amd64
#ENV PATH $PATH:$JAVA_HOME/bin

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the entire app directory to the working directory
COPY . .

# Build the app for production
RUN npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios/assets
RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# Expose port 8080 for the React Native packager
EXPOSE 8080

# Start the app
ENTRYPOINT [ "yarn", "start" ]
CMD ["android"]