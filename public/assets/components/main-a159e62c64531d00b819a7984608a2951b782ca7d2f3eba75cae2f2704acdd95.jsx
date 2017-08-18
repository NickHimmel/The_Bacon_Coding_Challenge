const Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="main">
        {props.children}
      </div>
    </div>
  )
}
