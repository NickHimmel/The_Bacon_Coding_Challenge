const JobListing = (props) => {
  return (
    <div col-xs-12 col-sm-12 col-md-12>
      <h2 className="job-title">{props.job.title}</h2>
      <h3 className="job-company">{props.job.company}</h3>
      <p className="city">{props.job.city}</p>
      <p className="state">{props.job.state}</p>
      <p className="description">{props.job.description}</p>
    </div>
  )
}
