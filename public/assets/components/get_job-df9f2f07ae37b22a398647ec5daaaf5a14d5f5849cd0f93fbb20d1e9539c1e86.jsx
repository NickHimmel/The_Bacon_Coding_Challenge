class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
    // this.handleJob = this.handleJob.bind(this)
  }

  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response}) });
  }
  // handleJob() {
  //     // debugger
  //   return 'hello';
  // }
  render() {
    let job = this.state.job;
    console.log(job);
    return (
      <div className="job-listing">
        <Job job={job}/>
      </div>
    )
  }
}
