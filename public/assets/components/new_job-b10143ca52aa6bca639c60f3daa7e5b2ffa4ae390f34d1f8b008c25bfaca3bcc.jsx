class NewJob extends React.Component {
  handleClick() {
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let level = this.refs.level.value;

    console.log('The name value is ' + name + ' the description value is ' + description + " and the level is " + level)
  }
  render() {
    return (
      <div>
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
      </div>

    )
  }
}
