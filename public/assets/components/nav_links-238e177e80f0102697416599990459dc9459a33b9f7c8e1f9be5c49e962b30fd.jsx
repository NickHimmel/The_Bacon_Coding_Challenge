var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div>
      <a className="hamburger_icon" className="closed">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <ul className="nav-links">
        <li>Log In</li>
        <li>Log Out</li>
        <li>About</li>
        <Link to="/create"><li className="pill-box">Post a Job</li></Link>
      </ul>
    </div>
  )
}
