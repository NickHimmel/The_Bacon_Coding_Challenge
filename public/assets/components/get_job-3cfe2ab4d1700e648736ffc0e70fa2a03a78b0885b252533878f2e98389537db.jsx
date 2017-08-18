class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
    handleJob = handleJob.bind(this)
  }
  
  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState( {job: response}, () => {
  console.log(this.state); } ) });
  }

  handleJob() {
    debugger
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}
