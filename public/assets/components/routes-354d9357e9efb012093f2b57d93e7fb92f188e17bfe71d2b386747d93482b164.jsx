var ReactDOM = ReactDOM;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink = ReactRouter.IndexLink;
var IndexRedirect = ReactRouter.IndexRedirect;
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
        <Router history={hashHistory}>
          <Route path='/' component={Main}>

          </Route>
        </Router>,
        document.getElementById('app')
    );
