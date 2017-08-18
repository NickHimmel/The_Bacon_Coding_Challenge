class EditJob extends React.Component {
  constructor () {
    super();
    this.state = {job: []}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    $.getJSON('/api/v1/jobs/' + this.props.params.id + '.json', (response) => { this.setState({job: response}) });
  }

  handleClick() {
    let id = this.state.job.id;
    let title = this.refs.title.value;
    let company = this.refs.company.value;
    let level = this.refs.level.value;
    let description = this.refs.description.value;
    let city = this.refs.city.value;
    debugger
    let state = this.refs.state.value;
    let user_id = 1;
    $.ajax({
      url: '/api/v1/jobs/' + id,
      type: 'PUT',
      data: { title: title, company: company, level: level, description: description, city: city, state: state, user_id: user_id },
      success: (response) => {
        window.location.href = '/';
      },
      error: (response) => {
        $('.error').text(response.responseText);
      }
    });
  }
  render() {
    let job = this.state.job;
    return (
      <div className="job-listing">
        <div className="job-form-container">
          <h1>Edit Job</h1>
          <form className="job-form">
            <div className="form-group has-error">
              <label>Job Title</label>
              <input ref='title' placeholder={job.title}/>
            </div>
            <div className="form-group">
              <label>Company</label>
              <input ref='company' placeholder={job.company}/>
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
              <textarea ref="description" className="form-control" rows="6" placeholder={job.description}></textarea>
            </div>
            <div className="form-group">
              <label>City</label>
              <input ref="city" id="city" placeholder={job.city}/>
            </div>
            <div className="form-group">
              <label>Enter State Abbreviation</label>
              <input ref="state" placeholder={job.state}/>
            </div>
            <button type="submit" onClick={this.handleClick} className="btn btn-default">Submit</button>
          </form>
        </div>
        <div><h1 className="error"></h1></div>
      </div>
    )
  }
}
