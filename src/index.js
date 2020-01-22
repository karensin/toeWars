import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter basename="/toeWars">

    <Route exact path="/" component={App} />


  </BrowserRouter>


  , document.getElementById('root'));

