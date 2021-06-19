# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Clone the repository in order to run in your local system.

## WEB APPLICATION

## Available Scripts

In the project directory, go to the directory --> Indian Currency Prediction and run:


### `npm install`

Installs all the dependencies required with the help of json file.
So, navagate throught the directory "Indian Currency Prediction" and run the above dependencies installation
command i.r "npm install"

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## ANDROID APPLICATION

Required Installations in order to build an Android APK file:
  1.Android Studio : https://developer.android.com/studio
  2.React Capacitor : https://capacitorjs.com/solution/react
  3.React web application : files inside the directory "Indian Currency Prediction"


## Install Capacitor.
Add Capacitor to your project and create a config for your app

### `npm install @capacitor/core @capacitor/cli`
### `npx cap init [name] [id] --web-dir=build`

## Create a production build in order to build apk file using android

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



## Install the native platforms you want to target.

### `npm i @capacitor/ios @capacitor/android`
### `npx cap add android`
### `npx cap add ios`

## Open the project in Android Studio with the following command
### `npx cap open android`
![Screenshot (26)](https://user-images.githubusercontent.com/55684348/122649799-52fe0c00-d14d-11eb-9213-d3ec2d2d8ec1.png)


