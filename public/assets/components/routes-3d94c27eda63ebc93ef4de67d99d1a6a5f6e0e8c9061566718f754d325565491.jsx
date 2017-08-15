import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>

  </Router>,
  document.getElementById('app')
);
