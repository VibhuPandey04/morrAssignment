import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark text-light'>
      <Container>
        <Row className='p-3'>
          <Col md='auto' className='border-end'>
            {' '}
            Home{' '}
          </Col>
          <Col md='auto' className='border-end'>
            {' '}
            Terms and Conditions{' '}
          </Col>
          <Col md='auto' className='border-end'>
            {' '}
            Privacy Policy{' '}
          </Col>
          <Col md='auto' className='border-end'>
            {' '}
            Collection Statement{' '}
          </Col>
          <Col md='auto' className='border-end'>
            {' '}
            Help{' '}
          </Col>
          <Col> Manage Account </Col>
        </Row>
        <Row className='p-3'>
          <Col>Copyright © 2016 DEMO Streaming All Right Reserved </Col>
        </Row>
        <Row className='p-3'>
          <Col md='auto'>
            <i className='fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x'>
              {' '}
            </i>{' '}
          </Col>
          <Col md='auto'>
            <i className='fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x'>
              {' '}
            </i>{' '}
          </Col>
          <Col md='auto'>
            <i className='fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x'>
              {' '}
            </i>{' '}
          </Col>

          <Col></Col>
          <Col></Col>
          <Col></Col>

          <Col md='auto'>
            {' '}
            <img
              height='50'
              className='float-right'
              src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg'
              alt='appstore.png'
            ></img>
          </Col>
          <Col md='auto'>
            {' '}
            <img
              height='50'
              className='float-right'
              src='https://puzl-production.s3.amazonaws.com/files/uploads/files/001/572/848/original/download-play-store-600x220.png?1493978008'
              alt='appstore.png'
            ></img>
          </Col>
          <Col md='auto'>
            {' '}
            <img
              height='50'
              className='float-right'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Get_it_from_Microsoft_Badge.svg/1200px-Get_it_from_Microsoft_Badge.svg.png'
              alt='appstore.png'
            ></img>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
