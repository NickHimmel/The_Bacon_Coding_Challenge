class NewJob extends React.Component {
  render() {
    return (
      <div>
        <input ref='title' placeholder='Job Title' />
        <input ref='title' placeholder='Company Name' />
        <form action="">
        <input type="radio" ref="level" value="intern"/> Intern
        <input type="radio" ref="level" value="junior"/> Junior
        <input type="radio" ref="level" value="senior"/> Senior
        </form>
        <textarea ref="description" rows="5" cols="25">Description of the Job</textarea>
      </div>

    )
  }
}
