# AngularFire

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2. 
This project was updated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Functions

CD into Functions Folder

Run `npm install` to install Firebase Dependencies.

You will need Firebase tools [Firebase](https://firebase.google.com/docs/cli/) run `npm install -g firebase-tools` and `firebase login`. 

You will need a Firebase account. The Functions and 3rd party API's used in the project will require you to upgrade your Firebase project to a paid tier (which may still be in the free tier for data usage depending on your use).

In your Angular Environments you need to put your Firebase credentials, Google Maps key, and Contentful space ID. Remember to remove your keys before you deploy to github.

Once you connect your project to Firebase in your Firebase Functions folder (Firebase CLI Tools) you need to configure your API keys for Twilio and Sendgrid following Firebase guidelines (https://firebase.google.com/docs/functions/config-env).

Run `firebase deploy --only functions` to build your cloud functions.
