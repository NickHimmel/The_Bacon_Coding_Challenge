class AllJobs extends React.Component {
  constructor () {
    super();
    this.state = { jobs: [] }
  }
  componentDidMount() {
    console.log('Component mounted')
  }

  render() {
    return (
      <div>
        <h1>All jobs</h1>
      </div>
    )
  }
}
