class Routes extends React.Component {
  render() {
    return (
      <Router histroy={browserHistory}>
        <Route path='/' component={Main}>

        </Route>
      </Router>
    )
  }
}
