# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


---

## **Setup Firestore Rules**

### Instal firebase-tools
`> npm install -g firebase-tools` <kbd>ENTER</kbd>

### Login to firebase
`> firebase login` <kbd>ENTER</kbd>

### Place you into root working directory

### Configure firebase
`> firebase init` <kbd>ENTER</kbd>

### Choose firebase features
Choose `Firestore: configure security rules and indexes files for Firestore, Hosting: configure files for Firebase Hosting and (optionally) set up GitHub Action deploys` <kbd>ENTER</kbd>

### Associate project directory with a Firebase project
`Use and existing project`

`Select a default Firebase project for this directory: financial-tracker-*****` <kbd>ENTER</kbd>

### Firestore Rules Setup
`Choose file name to use: firestore.rules` <kbd>ENTER</kbd>

### Firestore Indexes Setup
`Choose file name to use: firestore.indexes.json` <kbd>ENTER</kbd>

### Firestore Setup Hosting
`Choose public directory name: build` <kbd>ENTER</kbd>

`Configure single-page app (rewrite all urls to /index.html): Yes` <kbd>ENTER</kbd>

`Setup  automatic builds and deploys with GitHub: No` <kbd>ENTER</kbd>

### End

---

## **Deploy Firestore Rules**

`> firebase deploy --only firestore` <kbd>ENTER ↩</kbd>

---

## **Build the react app**

`> npm run build` <kbd>ENTER</kbd>

---

## Deploy firebase

`> firebase deploy` <kbd>ENTER</kbd>

