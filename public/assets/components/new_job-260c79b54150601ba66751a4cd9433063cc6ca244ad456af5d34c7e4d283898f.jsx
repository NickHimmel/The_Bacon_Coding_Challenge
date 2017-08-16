class NewJob extends React.Component {
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
      </div>

    )
  }
}
