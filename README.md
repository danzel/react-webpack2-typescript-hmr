Minimal Typescript + React + Webpack2 with Hot Module Reloading site
====================================================================

```
yarn install
npm install -g webpack webpack-dev-server

webpack-dev-server
```

Building for production
=======================

```
webpack --config webpack.prod.config.js
```
You probably want to change `react` + `react-dom` to be webpack externals so they don't get built in too.
You also probably want to add uglify to the build process.