# JobFinder
This is a simple mobile application for job searching

## Features

Alongside building this application, I learned how to:
- develop visually appealing UI/UX designs
- fetch data from an external API and integrate it
- implement search & pagination functionality
- create custom API data fetching hooks
- write clean, organized, and maintainable code with proper architecture
- follow the best practices for React Native development
- Configure environment variables
- Dockerize react native app

## Built With

- React Native CLI
- Typescript
- RapidAPI
- Axios for fetching
- Docker

### Start Application

```bash
# using npm
npm start

# OR using Yarn
yarn start
``` 

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```


## Step 3: Dockerize Application


```bash
# create Dockerfile

# build image
docker build -t job_finder .

# first run
docker run -it -p 8081:8081 --name job_finder job_finder

# run metro 
docker start -i job_finder

# run android app
yarn android

```


### Authors and acknowledgment

[MEKIDECHE Imane](https://github.com/MekImEne)

