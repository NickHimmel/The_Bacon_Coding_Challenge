import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

class Routes extends React.Component {
  render() {
    return (
      <Router histroy={hashHistory}>
        {/* <Route path='/' component={Main}>
          <IndexRoute component={AllJobs}/>
        </Route> */}
      </Router>
    )
  }
}
