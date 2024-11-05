import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar className="bg-info fw-bolder">
        <Container>
          <Navbar.Brand href="#home">
               <Link to={'/'} style={{textDecoration:"none",color:"white"}}>
               <i class="fa-solid fa-play fa-beat-fade fs-4 me-3"></i>
                   Media-Player
               </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
