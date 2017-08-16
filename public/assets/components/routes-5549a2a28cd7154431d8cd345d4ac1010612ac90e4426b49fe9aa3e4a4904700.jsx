class Routes extends React.Component {
  render() {
    return (
      <Router histroy={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={all_jobs}/>
        </Route>
      </Router>
    )
  }
}
