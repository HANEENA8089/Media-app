import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-light">
        <Container>
          <Navbar.Brand href="" className='text-danger fw-bolder fs-3'>
            <Link style={{textDecoration:"none",color:"blueviolet"}} to={'/'}>
            <i class="fa-solid fa-play fa-bounce"></i> Media-Player

            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
