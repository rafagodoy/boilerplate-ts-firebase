# The big eye API

DESCRIPTION

## How to setup the application

First of all, you need install firebase-tools in your local machine to access firebase CLI commands

```bash
npm install -g firebase-tools
```

And then, you will be following steps bellow:


**1 - Authentication on platform:** You will need authentication on firebase platform, running the command

```bash
firebase login
```

**2 - Choose the project:** Select one project available executing the following command

```bash
firebase use fishing-money-48480
```

**3 - Install nodejs packages:** Now, you need install nodeJs dependencies from project running

```bash
yarn install
```

or

```bash
npm install
```

**4 - Setup application credentials:** download the credentials key from firebase project through GCP console and then, run this command to setup default

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

OBS: To acquire the credentials keys from firebase project, go to https://cloud.google.com/iam/docs/keys-list-get


## How to run application on localhost

To emulator your application and test it, run the command:

```bash
yarn start:emulator
```

or

```bash
npm run start:emulator
```

## How to deploy application

To deploy express application into a cloud function, run the command:

```bash
yarn deploy
```

or

```bash
npm run deploy
```