class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
  }
  handleJob() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { return response })
  }

  render() {
    let job = handleJob();
    debugger
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}
