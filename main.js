function Logo() {
  return (
    <img
      src="https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg?w=900&t=st=1700557351~exp=1700557951~hmac=f2fafe342ef9bf250c93201f868ad647c5e3455d176b1c5a2530001a7322f75b"
      width="40"
    />
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Title() {
  return <h1>Paw Pals</h1>;
}

function Paragraph() {
  return <p>This is a paragraph</p>;
}

function Link() {
  return <a href="main.html">This is a link</a>;
}

function Element() {
  return (
    <div>
      <Logo />
      <Title />
      <Navbar />
      <Paragraph />
      <Link />
    </div>
  );
}

ReactDOM.render(<Element />, document.getElementById("root"));
