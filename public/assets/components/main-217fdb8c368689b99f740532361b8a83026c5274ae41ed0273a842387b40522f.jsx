const Main = (props) => {
  return (
    <div>
      <Nav />
      <div>
        {props.children}
      </div>
    </div>
  )
}
