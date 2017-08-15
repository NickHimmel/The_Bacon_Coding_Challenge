
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={SplashPage}/>
      <Route path="/code" component={Code}/>
      <Route path="/photo" component={Photo}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
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
