class AllJobs extends React.Component {
  constructor () {
    super();
    this.state = { jobs: [] }
  }
  componentDidMount() {
    $.getJSON('/api/v1/jobs.json', (response) => { this.setState({ jobs: response }) });
  }

  render() {
    let jobs = this.state.jobs.map((job) => {
      return (
        <div>
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
        </div>
      )
    });

    return (
      <div>
        {jobs}
      </div>
    )
  }
}
