var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div>
        <ul className="nav-links">
          <li>Log In</li>
          <li>Log Out</li>
          <li>About</li>
          <li className="pill-box"><Link to="/create">Post a Job</Link></li>
        </ul>
    </div>
  )
}
