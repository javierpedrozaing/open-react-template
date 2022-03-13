import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";

import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/User/login';
import Register from './components/User/register';
import Profile from './components/User/profile';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
