class GetJob extends React.Component {
  constructor () {
    super();
    this.state = { job: [] }
  }
  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({ jobs: response}) });
  }

  render() {
    let job = this.state.job
    return (
      <div>
        {job.title}
      </div>
    )
  }
}
