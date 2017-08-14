class AllJobs extends React.Component {
  constructor () {
    super();
    this.state = { jobs: [] }
  }
  componentDidMount() {
    $.getJson('/api/v1/jobs.json', (response) => { this.setState({ jobs: response }) });
  }

  render() {
    return (
      <div>
        <h1>All jobs</h1>
      </div>
    )
  }
}
