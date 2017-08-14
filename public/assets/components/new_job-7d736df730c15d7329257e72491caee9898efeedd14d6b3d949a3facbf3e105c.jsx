class NewJob extends React.Component {
  render() {
    return (
      <div>
        <input ref='title' placeholder='Job Title' />
        <input ref='title' placeholder='Company Name' />
        <textarea ref="description" rows="10" cols="50">Description of the Job</textarea>
      </div>

    )
  }
}
