var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div className="col-sm-12 col-md-6 nav-links">
        <ul>
          <li>Log In</li>
          <li>Log Out</li>
          <li>About</li>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/create" activeClassName="active" className="pill-box">Post a Job</Link></li>
        </ul>
    </div>
  )
}
