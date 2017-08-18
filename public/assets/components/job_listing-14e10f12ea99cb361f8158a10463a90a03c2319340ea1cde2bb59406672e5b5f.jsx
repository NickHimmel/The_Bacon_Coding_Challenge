const JobListing = (props) => {
  return (
    <div col-xs-12 col-sm-12 col-md-12>
      <h2 className="text-center">{props.job.title}</h2>
      <h3 className="text-center">{props.job.company}</h3>
    </div>
  )
}
