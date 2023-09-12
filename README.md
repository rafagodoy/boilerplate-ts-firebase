# boilerplate for firebase and typescript projects

## How to setup the application

First of all, you need install firebase-tools in your local machine to access firebase CLI commands

```bash
npm install -g firebase-tools
```

And then, you will be following steps bellow:


**1 - Authentication on platform:** you will need authentication on firebase platform, running the command

```bash
firebase login
```

**2 - Choose the project:** select one project available executing the following command

```bash
firebase use fishing-money-48480
```

**3 - Install nodejs packages:** now, you need install nodeJs dependencies from project by

```bash
yarn install
```

**4 - Setup application credentials:** download the credentials key from firebase project through GCP console and then, run this command to setup default

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

> :page_facing_up: **note:** to acquire the credentials keys from firebase project, go to https://cloud.google.com/iam/docs/keys-list-get

> :page_facing_up: **note:** persist this variable in your OS to avoid insert it each time that you restart your computer


**5 - Setup database if you wants emulate it:** run this command to setup firestore environment variable when you simulate your database on localhost

```bash
export FIRESTORE_EMULATOR_HOST="127.0.0.1:8080"
```

> :page_facing_up: **note:** to run a database on localhost, it is necessary **to have Java - JRE installed**. Then, configure the database environment variable to monitor the localhost database instance

## How to run application on localhost

To run your application and start it on localhost:

```bash
yarn start:dev
```

> :page_facing_up: **note:** to access resources like a database/firestore is necessary setup environment variable `GOOGLE_APPLICATION_CREDENTIALS` otherwise you will get "Could not load the default credentials" error 

## How to run application on firebase emulators

To run your application in firebase emulators, fist of all, build it

```bash
yarn build
```

and then, start the emulator by

```bash
yarn start:emulator
```

## How to deploy application

To deploy express application into a cloud function, run the command:

```bash
yarn deploy
```
