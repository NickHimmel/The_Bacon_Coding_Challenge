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
          <JobListing key={job.id} job={job}/>
          <div className="job-button">
            <li className="pill-box view-jobs"><Link to="/create" activeClassName="active">View Job</Link></li>
          </div>
        </div>
      )
    });

    return (
      <div className="all-jobs">
        {jobs}
      </div>
    )
  }
}
