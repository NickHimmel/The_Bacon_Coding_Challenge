class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
  }

  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response}) });
  }
  handleJob() {
    console.log(test);
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        {handleJob()}
      </div>
    )
  }
}
