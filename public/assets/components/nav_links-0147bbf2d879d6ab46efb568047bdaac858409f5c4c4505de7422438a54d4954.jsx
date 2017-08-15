var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div className="col-sm-12 col-md-4">
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/create" activeClassName="active">Add a Job</Link></li>
        </ul>
    </div>
  )
}
