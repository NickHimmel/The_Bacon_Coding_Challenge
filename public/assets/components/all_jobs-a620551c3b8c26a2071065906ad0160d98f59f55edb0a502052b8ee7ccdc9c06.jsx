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
        <div className="col-xs-12 col-sm-12 col-md-12 job-listing">
          <JobListing key={job.id} job={job}/>
          <li className="pill-box view-jobs"><Link to="/create" activeClassName="active">View Job</Link></li>
        </div>
      )
    });

    return (
      <div className="row all-jobs">
        {jobs}
      </div>
    )
  }
}
