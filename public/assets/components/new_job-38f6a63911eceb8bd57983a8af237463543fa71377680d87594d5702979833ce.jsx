class NewJob extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    debugger
    let title = this.refs.title.value;
    let company = this.refs.company.value;
    let level = this.refs.level.value;
    let salary = this.refs.salary.value;
    let description = this.refs.description.value;
    let city = this.refs.city.value;
    let state = this.refs.state.value;
    let user_id = 1;
    $.ajax({
      url: '/api/v1/jobs',
      type: 'POST',
      data: { title: title, company: company, level: level, salary: salary, description: description, city: city, state: state, user_id: user_id },
      success: (response) => {
        console.log('it worked!', response);
      }
    });
  }
  render() {
    return (
      <div className="job-listing top-margin">
        <h1>Post A Job</h1>
        <form>
          <div className="form-group">
            <label>Job Title</label>
            <input ref='title' placeholder='Job Title' />
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
            <label>State</label>
            <select className="form-control state" name="state">
              <option ref="">N/A</option>
              <option ref="AK">Alaska</option>
              <option ref="AL">Alabama</option>
              <option ref="AR">Arkansas</option>
              <option ref="AZ">Arizona</option>
              <option ref="CA">California</option>
              <option ref="CO">Colorado</option>
              <option ref="CT">Connecticut</option>
              <option ref="DC">District of Columbia</option>
              <option ref="DE">Delaware</option>
              <option ref="FL">Florida</option>
              <option ref="GA">Georgia</option>
              <option ref="HI">Hawaii</option>
              <option ref="IA">Iowa</option>
              <option ref="ID">Idaho</option>
              <option ref="IL">Illinois</option>
              <option ref="IN">Indiana</option>
              <option ref="KS">Kansas</option>
              <option ref="KY">Kentucky</option>
              <option ref="LA">Louisiana</option>
              <option ref="MA">Massachusetts</option>
              <option ref="MD">Maryland</option>
              <option ref="ME">Maine</option>
              <option ref="MI">Michigan</option>
              <option ref="MN">Minnesota</option>
              <option ref="MO">Missouri</option>
              <option ref="MS">Mississippi</option>
              <option ref="MT">Montana</option>
              <option ref="NC">North Carolina</option>
              <option ref="ND">North Dakota</option>
              <option ref="NE">Nebraska</option>
              <option ref="NH">New Hampshire</option>
              <option ref="NJ">New Jersey</option>
              <option ref="NM">New Mexico</option>
              <option ref="NV">Nevada</option>
              <option ref="NY">New York</option>
              <option ref="OH">Ohio</option>
              <option ref="OK">Oklahoma</option>
              <option ref="OR">Oregon</option>
              <option ref="PA">Pennsylvania</option>
              <option ref="PR">Puerto Rico</option>
              <option ref="RI">Rhode Island</option>
              <option ref="SC">South Carolina</option>
              <option ref="SD">South Dakota</option>
              <option ref="TN">Tennessee</option>
              <option ref="TX">Texas</option>
              <option ref="UT">Utah</option>
              <option ref="VA">Virginia</option>
              <option ref="VT">Vermont</option>
              <option ref="WA">Washington</option>
              <option ref="WI">Wisconsin</option>
              <option ref="WV">West Virginia</option>
              <option ref="WY">Wyoming</option>
            </select>
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-default">Submit</button>
        </form>

      </div>

    )
  }
}
