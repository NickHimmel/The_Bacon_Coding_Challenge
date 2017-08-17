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
        <JobForm onClick={this.handleClick}/>
      </div>

    )
  }
}
