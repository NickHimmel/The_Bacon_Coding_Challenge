const JobForm = (props) => {
  return (
    <div>
      <h1>Post A Job</h1>
      <form>
        <div className="form-group">
          <label>Job Title</label>
          <input ref='title' placeholder='Job Title' />
        </div>
      </form>
    </div>
  )
}
