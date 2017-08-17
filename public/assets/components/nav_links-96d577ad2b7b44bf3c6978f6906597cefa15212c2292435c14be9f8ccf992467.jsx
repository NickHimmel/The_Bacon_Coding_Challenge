var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div>
      <a id="hamburger_icon" className="closed" onClick={handleClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
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
