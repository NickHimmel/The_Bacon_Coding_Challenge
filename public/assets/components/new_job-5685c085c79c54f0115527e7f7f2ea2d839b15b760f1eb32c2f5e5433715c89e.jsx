class NewJob extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    debugger
    // let title = this.value.title.value;
    // let company = this.value.company.value;
    // let level = this.value.level.value;
    // let salary = this.value.salary.value;
    // let description = this.value.description.value;
    // let city = this.value.city.value;
    // let state = this.value.state.value;
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
      <div>
        <JobForm onClick={this.handleClick}/>
      </div>

    )
  }
}
