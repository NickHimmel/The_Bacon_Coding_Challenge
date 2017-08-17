class NewJob extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    debugger
    // let title = this.refs.title.value;
    // let company = this.refs.company.value;
    // let level = this.refs.level.value;
    // let salary = this.refs.salary.value;
    // let description = this.refs.description.value;
    // let city = this.refs.city.value;
    // let state = this.refs.state.value;
    // let user_id = 1;
    // $.ajax({
    //   url: '/api/v1/jobs',
    //   type: 'POST',
    //   data: { title: title, company: company, level: level, salary: salary, description: description, city: city, state: state, user_id: user_id },
    //   success: (response) => {
    //     console.log('it worked!', response);
    //   }
    // });
  }
  render() {
    return (
      <div className="job-listing top-margin">
        <JobForm onClick={this.handleClick}/>
      </div>

    )
  }
}
