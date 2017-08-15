var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink = ReactRouter.IndexLink;
var IndexRedirect = ReactRouter.IndexRedirect;
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;

class Routes extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={Main}>
             <IndexRoute component={AllJobs}/>
          </Route>
        </Router>
    )
  }
}
