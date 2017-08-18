class GetJob extends React.Component {
  constructor () {
    super();
    this.state = { job: [] }
  }
  componentDidMount() {
    debugger
    $.getJSON('/api/vi/jobs' + props.params.id + '.json', (response) => { this.setState({ jobs: response}) });
  }

  render() {
    let job = this.state.job
    return (
      <div>
        {job}
      </div>
    )
  }
}
