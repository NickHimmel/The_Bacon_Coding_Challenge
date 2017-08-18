class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {}
  }
  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState(response) });
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
