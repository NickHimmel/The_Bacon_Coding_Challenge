class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
  }

  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response}) });
  }

  render() {
    let job = this.state.job;
    return (
      <div className="job-listing top-margin">
        <Link to='/'><h1 className="home-x">&#9587;</h1></Link>
        <Job job={job}/>
        <Link to={ {pathname: `/edit/${job.id}`} }><li className="pill-box view-jobs">Edit Job</li></Link>
      </div>
    )
  }
}
