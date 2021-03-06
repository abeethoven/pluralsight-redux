import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configStore from './store/configStore'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const store = configStore();

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
