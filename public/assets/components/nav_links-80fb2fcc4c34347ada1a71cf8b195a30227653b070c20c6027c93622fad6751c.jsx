var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div className="col-sm-10 col-md-10 col-xs-10">
        <ul className="nav-links">
          <li>Log In</li>
          <li>Log Out</li>
          <li>About</li>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li className="pill-box"><Link to="/create" activeClassName="active">Post a Job</Link></li>
        </ul>
    </div>
  )
}
