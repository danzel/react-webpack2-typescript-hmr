Minimal Typescript + React + Webpack2 with Hot Module Reloading site. (No CSS support)
```
yarn install
npm install -g webpack webpack-dev-server

webpack-dev-server
```

There is currently no production webpack config, probably do something like:

Remove `new webpack.HotModuleReplacementPlugin(),`.

Change `react` + `react-dom` to be webpack externals