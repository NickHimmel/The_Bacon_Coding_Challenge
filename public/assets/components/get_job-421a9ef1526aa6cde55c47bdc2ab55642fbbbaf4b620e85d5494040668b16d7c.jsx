class GetJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
  }

  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response}) });
  }

  render() {
    let job = this.state.job;
    return (
      <div className="job-listing top-margin">
        <Link to={ {pathname: `/edit/${job.id}`} }><li className="pill-box view-jobs">Edit Job</li></Link>
        <Job job={job}/>
        <div className="edit-form">
          <h1>Edit Your Job Posting</h1>
          <form className="job-form">
            <div className="form-group has-error">
              <label>Job Title</label>
              <input ref='title' />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input ref='company'/>
            </div>
            <div className="form-group">
              <label>Level</label>
              <label className="radio-inline">
                <input name="level" type="radio" ref="level" value="intern"/>
                Intern
              </label>
              <label className="radio-inline">
                <input name="level" type="radio" ref="level" value="junior"/>
                Junior
              </label>
              <label className="radio-inline">
                <input name="level" type="radio" ref="level" value="senior"/>
                Senior
              </label>
            </div>
            <div className="form-group">
              <label>Enter Description</label>
              <textarea ref="description" className="form-control" rows="6"></textarea>
            </div>
            <div className="form-group">
              <label>City</label>
              <input ref="city" />
            </div>
            <div className="form-group">
              <label>Enter State Abbreviation</label>
              <input ref="state" />
            </div>
            <button type="submit" onClick={this.handleClick} className="btn btn-default">Submit</button>
          </form>
          </div>
          <div><h1 className="error"></h1></div>
        </div>
    )
  }
}
