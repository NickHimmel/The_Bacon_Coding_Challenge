class GetJob extends React.Component {
  constructor () {
    super();
    this.state = { }
  }
  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response[0]}) });
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
