
```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

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




