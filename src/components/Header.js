import React from 'react'
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Navbar expand='lg' variant='dark' bg='dark'>
        <Navbar.Brand href='/' className='align-center'>Developer Jobs</Navbar.Brand>
      </Navbar>
    </Container>
  )
}

export default Header
