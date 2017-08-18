var Link = ReactRouter.Link;

const NavLinks = () => {
  return (
    <div>
      <a id="hamburger_icon" className="closed" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </a>
      <ul className="nav-links">
        <Link className="link-to"><li>Log In</li></Link>
        <Link to="/create"><li className="pill-box">Post a Job</li></Link>
      </ul>
    </div>
  )
}

const handleClick = () => {
  let hamburgerIcon = document.getElementById("hamburger_icon")
  let bars = hamburgerIcon.children;
  let dropDownMenu = document.querySelector('.nav_links');
  if (hamburgerIcon.classList.contains('closed')) {
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.add('change' + i);
    }
    hamburgerIcon.classList.remove('closed');
    hamburgerIcon.classList.add('open');
    dropDownMenu.classList.add('show_menu');
  }
  else {
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.remove('change' + i);
    }
    hamburgerIcon.classList.add('closed');
    hamburgerIcon.classList.remove('open');
    dropDownMenu.classList.remove('show_menu');
  }
}
