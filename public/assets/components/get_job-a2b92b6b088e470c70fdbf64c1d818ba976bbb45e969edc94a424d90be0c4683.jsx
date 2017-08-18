class GetJob extends React.Component {
  constructor () {
    super();
    this.state = { job: [] }
  }
  componentDidMount() {
    $.getJSON('/api/vi/jobs/' + this.props.params.id + '.json', (response) => { this.setState({ jobs: response}) });
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
