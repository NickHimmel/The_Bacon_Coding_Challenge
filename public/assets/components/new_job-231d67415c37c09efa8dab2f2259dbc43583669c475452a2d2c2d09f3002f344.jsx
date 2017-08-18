class NewJob extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let title = this.refs.title.value;
    let company = this.refs.company.value;
    let level = this.refs.level.value;
    let description = this.refs.description.value;
    let city = this.refs.city.value;
    let state = this.refs.state.value;
    let user_id = 1;
    $.ajax({
      url: '/api/v1/jobs',
      type: 'POST',
      data: { title: title, company: company, level: level, description: description, city: city, state: state, user_id: user_id },
      success: (response) => {
        window.location.href = "index.html"
      }
    });
  }
  render() {
    return (
      <div className="job-listing top-margin">
        <div className="success-failure"><h1></h1></div>
        <h1>Post A Job</h1>
        <form>
          <div className="form-group">
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
            <input ref="city" placeholder='Enter city' />
          </div>
          <div className="form-group">
            <label>Enter State Abbreviation</label>
            <input ref="state" />
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
