let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let Link = ReactRouter.Link;
let IndexRoute = ReactRouter.IndexRoute;
let IndexLink = ReactRouter.IndexLink;
let IndexRedirect = ReactRouter.IndexRedirect;
let hashHistory = ReactRouter.hashHistory;
let browserHistory = ReactRouter.browserHistory;

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
