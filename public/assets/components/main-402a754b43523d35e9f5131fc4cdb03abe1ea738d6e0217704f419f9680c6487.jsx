const Main = (props) => {
  return (
    <div>
      <Nav />
      <Welcome />
      <div className="main">
        {props.children}
      </div>
    </div>
  )
}
