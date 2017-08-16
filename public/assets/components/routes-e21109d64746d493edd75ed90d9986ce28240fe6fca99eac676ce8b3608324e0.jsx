class Routes extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route path='/' component={Main}>

          </Route>
        </Router>
    )
  }
}
