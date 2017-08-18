const JobForm = (props) => {
  return (
    <div>
      <h1>Post A Job</h1>
      <form>
        <div className="form-group">
          <label>Job Title</label>
          <input ref='title' placeholder='Job Title' />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input ref='company' placeholder='Company' />
        </div>
        <div className="radio">
          <label>
            <input type="radio" ref="level" value="intern" checked/>
            Intern
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" ref="level" value="junior" checked/>
            Junior
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" ref="level" value="senior" checked/>
            Senior
          </label>
        </div>
        <textarea ref="description" className="form-control" rows="3"></textarea>
      </form>
    </div>
  )
}
