# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy the entire app directory to the working directory
COPY . .

# Install Android SDK and necessary tools
RUN apk add --no-cache openjdk8
RUN wget -q https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -O android-sdk.zip \
    && unzip -q android-sdk.zip -d /usr/local/android-sdk \
    && rm android-sdk.zip

# Set up environment variables for Android SDK
ENV ANDROID_HOME=/usr/local/android-sdk
ENV PATH=${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:${ANDROID_HOME}/tools/bin

# Accept Android licenses
RUN yes | sdkmanager --licenses

# Install necessary Android components with a different system image version
RUN sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0" "emulator" "system-images;android-29;google_apis;x86"

# Create an AVD (Android Virtual Device)
RUN echo "no" | avdmanager create avd -n test_avd -k "system-images;android-29;google_apis;x86" --device "Nexus 5"

# Expose ports for React Native packager and Android emulator
EXPOSE 8081 5554 5555 5556 5557 5558

# Start the app and the Android emulator
CMD [ "yarn", "start" ]
