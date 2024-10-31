import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  function clearlocal() {
    window.localStorage.removeItem("email");
    window.location.pathname = "register";
  }
  return (
    <>
      <Navbar bg="dark " data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        {window.localStorage.getItem("email") ? (
          <div className="but">
            <h6 className="bb" onClick={() => clearlocal()}>
              logout <i class="fa-solid fa-right-from-bracket"></i>
            </h6>
          </div>
        ) : (
          <div className="but">
            <Link to={"register"} style={{ textDecoration: "none" }}>
              <h6>Register</h6>
            </Link>
            <Link to={"login"} style={{ textDecoration: "none" }}>
              <h6>Login</h6>
            </Link>
          </div>
        )}
      </Navbar>
    </>
  );
};

export default Header;
