import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Paksa from '../images/paksa logo.png';

const Layout = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand><img src={Paksa} width={60} /></Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Layout