import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// const bodyParser = require('body-parser')
// const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackConfig = require('./webpack.config.js')

// const app = express()

// app.use(express.static(__dirname + '/public'))
// app.use(webpackDevMiddleware(webpack(webpackConfig)))
// app.use(bodyParser.urlencoded({extended: false}))

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
