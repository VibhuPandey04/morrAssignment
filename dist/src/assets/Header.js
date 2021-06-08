import React from 'react'
import { Container, Col } from 'react-bootstrap'

const Header = () => {
  return (
    <header className='bg-primary text-light'>
      <Container>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
          <div className='container-fluid'>
            <a className='navbar-brand'href="/">
              <h2 className='text-light '>DEMO Streaming </h2> 
            </a>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            
            <div className='collapse navbar-collapse' id='navbarColor01'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a className='nav-link ' href="/">
                    Log in
                  </a>
                </li>
                <li className='nav-item '>
                  <button type='button' className='btn btn-dark'>
                    Start your free trial
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
export default Header
