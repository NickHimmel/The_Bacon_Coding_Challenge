const JobListing = (props) => {
  return (
    <div>
      <a hfref="/job/:id">
      </a>
      <h2 className="text-center">{props.job.title}</h2>
      <h3 className="text-center">{props.job.company}</h3>
    </div>
  )
}
