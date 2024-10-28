import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import "../App.css"
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark " data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <div className='but' >
         <Link to={"register"} style={{textDecoration:"none"}}><h6>Register</h6></Link>
         <Link to={"login"}  style={{textDecoration:"none"}}><h6>Login</h6></Link>
        </div>
      </Navbar>
    
     
    </>
  )
}

export default NavBar
