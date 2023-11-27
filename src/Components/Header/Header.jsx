import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.css';
function Header() {
  return (
    <>
    {/*      'sm', 'md', 'lg', 'xl', 'xxl'        */}
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="header box-shadow">
          <Container fluid>
            <Navbar.Brand href="#">
            <Image className='logo' src="./src\assets\images\logo.png" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CHEFGUARD
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mt-1 justify-content-end flex-grow-1 menu-header pe-3">
                  <Nav.Link className='text-wrapper' href="#action1">Home</Nav.Link>
                  <Nav.Link className='text-wrapper' href="#action2">About</Nav.Link>
                  <Nav.Link className='text-wrapper' href="#action2">Products</Nav.Link>
                  <Nav.Link className='text-wrapper' href="#action2">Services</Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form> */}
                <Button className='contact-us'>Contact Us</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;