const JobListing = (props) => {
  return (
    <div>
      <h2 className="job-title">{props.job.title}</h2>
      <p className="job-company">{props.job.company}</p>
      <p className="city">{props.job.city}</p>
      <p className="state">{props.job.state}</p>
      <p className="description">{props.job.description}</p>
    </div>
  )
}
