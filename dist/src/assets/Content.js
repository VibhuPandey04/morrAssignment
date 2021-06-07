import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
const Content = () => {
  return (
    <>
      <h3 className='bg-dark text-light py-3'>
        <Container>Popular Titles</Container>
      </h3>
      <Container>
        <Row>
          <Col>
            <Card className='my-3 p-3 rounded'>
              <a href='../Screens/Series.js'>
                <Card.Img src='./images/series.png' varient='top' />
              </a>
            </Card>
            <Card.Body>
              <Card.Title as='div'>
                <strong>Popular Series</strong>
              </Card.Title>
            </Card.Body>
          </Col>
          <Col>
            <Card className='my-3 p-3 rounded'>
              <a href='../Screens/Movies.js'>
                <Card.Img src='./images/movies.png' varient='top' />
              </a>
            </Card>
            <Card.Body>
              <Card.Title as='div'>
                <strong>Popular Movies</strong>
              </Card.Title>
            </Card.Body>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default Content
