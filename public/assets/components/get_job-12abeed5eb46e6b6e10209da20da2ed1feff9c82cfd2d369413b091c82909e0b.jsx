class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
    this.handleJob = this.handleJob.bind(this)
  }

  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response}) });
  }
  handleJob() {
    return 'hello';
  }
  render() {
    let job = this.handleJob()
    debugger
    return (
      <div>
        <h1>test</h1>
      </div>
    )
  }
}
