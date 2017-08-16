class GetJob extends React.Component {
  constructor () {
    super();
    this.state = { job: {} }
  }
  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response}) });
    debugger
  }

  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}
