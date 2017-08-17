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
        <div className="job-listing">
          <Job key={job.id} job={job}/>
          <div className="job-button">
            <Link to={ {pathname: `/jobs/${job.id}`} }><li className="pill-box view-jobs">View Job</li></Link>
          </div>
        </div>
      )
    });

    return (
      <div>
        <Welcome />
        <div className="all-jobs">
          {jobs}
        </div>
      </div>
    )
  }
}
