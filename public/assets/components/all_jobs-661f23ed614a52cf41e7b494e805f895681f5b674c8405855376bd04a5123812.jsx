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
        <JobListing key={job.id} job={job}/>
      )
    });

    return (
      <div>
        {jobs}
      </div>
    )
  }
}
