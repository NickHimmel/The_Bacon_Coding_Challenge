const JobListing = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 job-listing">
      <h2 className="job-title">{props.job.title}</h2>
      <span className="job-company">{props.job.company}</span>
      <span className="city">{props.job.city}</span>
      <span className="state">{props.job.state}</span>
      <p className="description">{props.job.description}</p>
    </div>
  )
}
