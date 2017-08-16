class GetJob extends React.Component {
  constructor () {
    super();
    this.state = { job: [] }
  }
  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { console.log(response)});
  }

  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}
