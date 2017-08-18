const JobListing = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 job-listing">
      <h2 className="job-title">{props.job.title}</h2>
      <p className="job-company">{props.job.company}</p>
      <p className="city">{props.job.city}</p>
      <p className="state">{props.job.state}</p>
      <p className="description">{props.job.description}</p>
    </div>
  )
}
