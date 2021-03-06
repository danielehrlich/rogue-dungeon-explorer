[![Build Status](https://travis-ci.org/danielehrlich/Rogue-Dungeon-Explorer.svg?branch=master)](https://travis-ci.org/danielehrlich/Rogue-Dungeon-Explorer)
[![Heroku](http://heroku-badge.herokuapp.com/?app=youtube%2Dsearch%2Dapp&style=flat&svg=1)](https://rogue-dungeon-explorer-app.herokuapp.com)
[![Docker Hub](https://img.shields.io/badge/docker-ready-blue.svg)](https://registry.hub.docker.com/u/danora/youtube-search-app/)

![Rouge Dungeon Explorer App Screenshot](https://dl.dropboxusercontent.com/s/tqyj2885ko702ap/Screenshot%202016-10-24%2000.10.45.png) 
# Rogue Dungeon App

1. Utilizes React, the Youtube Node API, and lodash
2. The completed and compiled product is available in /Build.

##  Built With:

Rogue Dungeon Explorer uses a number of open source projects to work properly:

* [React]
* [Lodash]
* [node.js]
* [Webpack]

## Installation

Rogue Dungeon Explorer requires [Node.js](https://nodejs.org/) v6+ to run. Clone the repository and install the dependencies:
```sh
$ cd Rogue Dungeon Explorer
$ npm install
```

**API Key**:

Make sure to load your API key into the file /src/components/api_key.js before getting started. You can get your own API key from [https://console.developers.google.com](https://console.developers.google.com).

**Development:**
```sh
$ npm run dev
```
**Production:**
```sh
$ npm run build
$ npm run start
```

## Testing

Rogue Dungeon Explorer uses the following for testing:
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Chai-Enzyme](https://github.com/producthunt/chai-enzyme)
- [JSDOM](https://github.com/tmpvar/jsdom)

To run the tests:

```sh
$ npm run test
```

To run the tests in watch mode:

```sh
$ npm run test:watch
```

## Deploy:

Rogue Dungeon Explorer is set up to deploy with:
- [Heroku](https://heroku.com)
- [Travis CI](https://travis-ci.org)

To get started, first install the [Travis CLI](https://github.com/travis-ci/travis.rb). Note that this might require previous set-up such as installing the correct version of Ruby.

Create a Heroku account and app. Make sure the app is named exactly as it appears in the .travis.yml file so that Travis CI can deploy it correctly.

Add your API Access Key from Heroku to the .travis.yml file.
```sh
$ travis encrypt super_secret_password=ahduQu9ushou0Roh --add
```

Make sure you have linked your Travis-CI account with the Gitub repo you have created for this application.

Push to GitHub to kick off the tests followed by the build.

## Docker
Rogue Dungeon Explorer is very easy to install and deploy in a Docker container. The following command will download the image, and create a Rogue Dungeon Explorer container that opens the correct port:

```sh
docker run -d -p 8080:8080 --restart="always" daniel/youtube-search-app:latest
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8080
```

License
----

MIT





   [React]: <https://github.com/facebook/react>
   [Lodash]: <https://github.com/lodash/lodash>
   [Webpack]: <https://github.com/webpack/webpack>
   [Node.js]: <https://github.com/nodejs/node>
   [Youtube Search API]: <https://www.npmjs.com/package/youtube-api-search>
