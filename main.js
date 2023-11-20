function Element() {
  return <h1> Hello, everyone! </h1>;
}

const Navbar = (
  <nav>
    <h1>Paw Pals</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

ReactDOM.render(Navbar, document.getElementById("root"))
