const JobForm = (props) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Job Title</label>
          <input ref='title' placeholder='Job Title' />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input ref='company' placeholder='Company' />
        </div>
        <div className="form-group">
          <label>Level</label>
          <div className="radio">
            <label>
              <input type="radio" ref="level" value="intern"/>
              Intern
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" ref="level" value="junior"/>
              Junior
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" ref="level" value="senior"/>
              Senior
            </label>
          </div>
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
          <select class="form-control" className="state" name="state">
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
