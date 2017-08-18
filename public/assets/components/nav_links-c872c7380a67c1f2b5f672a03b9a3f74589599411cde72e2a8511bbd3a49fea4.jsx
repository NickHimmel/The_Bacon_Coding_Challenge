var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div className="col-sm-12 col-md-4 nav-links">
        <ul>
          <li>Log In</li>
          <li>Log Out</li>
          <li>About</li>
          <li><a href="/">Home</a></li>
          <li><a href="/create" className="pill-button">Post a Job</a></li>
        </ul>
    </div>
  )
}
