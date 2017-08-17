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
        <input ref='title' placeholder='Job Title' />
        <input ref='company' placeholder='Company Name' />
        <form action="">
          <input type="radio" ref="level" value="intern"/> Intern
          <input type="radio" ref="level" value="junior"/> Junior
          <input type="radio" ref="level" value="senior"/> Senior
        </form>
        <input ref="salary" placeholder='Enter salary as digits only, if it is 55K enter 55' />
        <textarea ref="description" rows="5" cols="25">Description of the Job</textarea>
        <input ref="city" placeholder='Enter city' />
        <input ref="state" placeholder='Enter state, NY for New York etc' />
        <button onClick={this.handleClick}>Submit</button>
        <h1>Post A Job</h1>
        <h1>Post A Job</h1>
        <form>
          <div className="form-group">
            <label>Job Title</label>
            <input value='title' placeholder='Job Title' />
          </div>
          <div className="form-group">
            <label>Company</label>
            <input value='company' placeholder='Company' />
          </div>
          <div className="form-group">
            <label>Level</label>
            <label className="radio-inline">
              <input name="level" type="radio" value="level" value="intern"/>
              Intern
            </label>
            <label className="radio-inline">
              <input name="level" type="radio" value="level" value="junior"/>
              Junior
            </label>
            <label className="radio-inline">
              <input name="level" type="radio" value="level" value="senior"/>
              Senior
            </label>
          </div>
          <div className="form-group">
            <label>Enter Description</label>
            <textarea value="description" className="form-control" rows="6"></textarea>
          </div>
          <div className="form-group">
            <label>City</label>
            <input value="city" placeholder='Enter city' />
          </div>
          <div className="form-group">
            <label>State</label>
            <select class="form-control" className="state" name="state">
              <option value="">N/A</option>
              <option value="AK">Alaska</option>
              <option value="AL">Alabama</option>
              <option value="AR">Arkansas</option>
              <option value="AZ">Arizona</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DC">District of Columbia</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="IA">Iowa</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="MA">Massachusetts</option>
              <option value="MD">Maryland</option>
              <option value="ME">Maine</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MO">Missouri</option>
              <option value="MS">Mississippi</option>
              <option value="MT">Montana</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="NE">Nebraska</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NV">Nevada</option>
              <option value="NY">New York</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VA">Virginia</option>
              <option value="VT">Vermont</option>
              <option value="WA">Washington</option>
              <option value="WI">Wisconsin</option>
              <option value="WV">West Virginia</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-default">Submit</button>
        </form>

      </div>

    )
  }
}
