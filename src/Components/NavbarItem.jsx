import React from 'react'
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarItem() {
  return (
    <div >
        <Navbar expand="lg" className="nav" variant="dark" >
      <Container>
        <Navbar.Brand href="#home"><Link  to='/'> Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link  to='/registration'>Create Account</Link></Nav.Link>
            <Nav.Link href="#link"><Link  to='/signup'>Login</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarItem