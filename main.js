

function Navbar() {
  return <nav>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
}

function Title () {
  return <h1>Paw Pals</h1>
}

function Paragraph  () {
  return <p>This is a paragraph</p>
}

function Link () {
  return <a href="main.html">This is a link</a>
}

function Element() {
  return <div>
    <Title />
    <Navbar />
    <Paragraph />
    <Link />
  </div>
}


ReactDOM.render(<Element />, document.getElementById("root"))