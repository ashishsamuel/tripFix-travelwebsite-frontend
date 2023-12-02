import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';


function Header() {
  return (
    <div>
      <Navbar expand="lg" className='navbar-style bg-light position-fixed'>
      <Container fluid className='mx-2' style={{display:'flex',justifyContent:'space-between'}}>
        <Link to='/'><img src="images/logo.png" alt="tripfix logo"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='fw-bold' style={{width:'75px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/'}>Home</Link></Nav.Link>
            <Nav.Link className='fw-bold' style={{width:'75px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/about'}>About</Link></Nav.Link>
            <Nav.Link className='fw-bold' style={{width:'75px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/tours'}>Tour</Link></Nav.Link>
            <Nav.Link className='fw-bold' style={{width:'75px'}}></Nav.Link>
            <Nav.Link className='fw-bold' style={{width:'75px'}}><Link className='text-info' style={{textDecoration:'none'}} to={'/login'}>Login</Link></Nav.Link>


            {/* <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Terms</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Reviews</NavDropdown.Item>
              
             
            </NavDropdown> */}
            <Nav.Link className='text-light'><Link style={{textDecoration:'none'}} to={'/register'}><button className='btn btn-info px-3 py-1 my-0 fw-bold'>Register</button></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
