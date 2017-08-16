class Routes extends React.Component {
  render() {
    return (
      <Router histroy={hashHistory}>
        <Route path='/' component={Main}>

        </Route>
      </Router>
    )
  }
}
