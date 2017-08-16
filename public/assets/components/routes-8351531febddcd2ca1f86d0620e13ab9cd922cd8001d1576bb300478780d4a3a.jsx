class Routes extends React.Component {
  render() {
    return (
      <Route path='/' component={Main}>
        <IndexRoute component={AllJobs}/>
      </Route>
    )
  }
}
