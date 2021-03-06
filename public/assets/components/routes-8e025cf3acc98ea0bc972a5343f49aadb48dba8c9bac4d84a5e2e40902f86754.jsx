var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink = ReactRouter.IndexLink;
var IndexRedirect = ReactRouter.IndexRedirect;
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory;

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
         <IndexRoute component={AllJobs}/>
         <Route path='/create' component={NewJob}/>
         <Route path='/jobs/:id' component={Job}/>
      </Route>
    </Router>
  )
}
