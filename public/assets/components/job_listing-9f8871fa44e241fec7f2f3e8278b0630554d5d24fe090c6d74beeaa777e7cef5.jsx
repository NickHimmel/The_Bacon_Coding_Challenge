const JobListing = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 job-listing">
      <h2 className="job-title">{props.job.title}</h2>
      <h3 className="job-company">{props.job.company}</h3>
      <span className="city">{props.job.city}</span>
      <span className="state">{props.job.state}</span>
      <p className="description">{props.job.description}</p>
    </div>
  )
}
