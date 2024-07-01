# This project builds the portfolio of LucasBurgessDev

It uses GitHub actions for full CI/CD with test coverage from Codecov.
The env var CI is currently set to false in github actions so won't fail if warnings are present.

# TODO

* ~~Add copyright to front page (MS/HashiCorp)~~
* ~~Handle Browser back/forward button events~~
* ~~PoC for top website features~~
* ~~Set up domain properly~~
* ~~Set up domain properly~~
* ~~Upgrade GA to newest version~~
    * ~~Add GA to all pages~~
* ~~Fix mobile view render~~
* ~~Link socials~~
* ~~Convert to using nvm for node package management~~
* ~~Increase Coverage of GA~~
* ~~Set up function for submit email button~~
    * ~~Front end form~~
    * ~~Set up google cloud~~
    * ~~Create firebase db to store emails~~
    * ~~Send details to db~~
    * ~~Return positive response on form submission and clear fields and close box~~
* Set up blog space
    * ~~Set up MVP~~
    * ~~Redo banner on blog pages~~
    * ~~Add styling like home page~~
    * ~~Create db to store blog entries~~
    * ~~Add read time~~
    * Create front end code to collect blogs from db
    * Work it out for image hosting
    * ~~Add blog entries to home page~~    
* Update all images used
    * add proper image for no results
    * ignore images if not passed
* Handle error on homepage website links where no internet connection
* Set up email verification
* Get tests working properly
* ~~Remove white line at top on mobile~~
* Create Logo
* Set up SEO
* Increase test coverage
* Finish terminal pages
* Google API Key move to secrets

# Workflow Status

[![Node.js CI](https://github.com/LucasBurgessDev/LucasBurgessDev.github.io/actions/workflows/node.js.yml/badge.svg?branch=test)](https://github.com/LucasBurgessDev/LucasBurgessDev.github.io/actions/workflows/node.js.yml)

[![Build and Deploy](https://github.com/LucasBurgessDev/LucasBurgessDev.github.io/actions/workflows/github-pages.yml/badge.svg?branch=main)](https://github.com/LucasBurgessDev/LucasBurgessDev.github.io/actions/workflows/github-pages.yml)

[![codecov](https://codecov.io/gh/LucasBurgessDev/LucasBurgessDev.github.io/branch/main/graph/badge.svg?token=AILYDF7SPM)](https://codecov.io/gh/LucasBurgessDev/LucasBurgessDev.github.io)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Creates the package and package-lock with all of the dependencies. OR USE:
### `npm ci`
CLEAN INSTALL - Creates the package and package-lock with all of the dependencies
### `npm prune`
Removes unused dependencies
### `react-native-debugger`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `node upgrade`
note - need to change ci/cd scripts
sudo n install 16.19.0
upgrade npm
npm install -g npm@9.4.1
remove package-lock and then reinstall - npm install 

n used to version manage Node.js versions
npm used to control package management
