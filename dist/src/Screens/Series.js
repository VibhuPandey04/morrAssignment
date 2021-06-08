import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Tile from '../assets/Tile'
import entries from '../entries'

const Series = () => {
  return (
    <div>
      <h3 className='bg-dark text-light py-3'>
        <Container>Popular Series</Container>
      </h3>
      <Container>
        <Row>
          {entries.map((movie) => (
            <Col key={movie.title} sm={12} md={6} lg={4} xl={3}>
              { (movie.releaseYear >= 2010 && movie.programType === "series") ?  <Tile movie={movie} year={movie.releaseYear} type={movie.programType} />: "" }
              </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Series
