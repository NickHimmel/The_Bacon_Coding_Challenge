const Main = (props) => {
  return (
    <div className="container-flex">
      <Nav />
      {props.children}
    </div>
  )
}
