import React from 'react'
import { Container ,Row , Col } from 'react-bootstrap'
import Tile from '../assets/Tile'
import entries from '../entries'

const Movies = () => {
  return (
    <div>
      <h3 className='bg-dark text-light py-3'>
        <Container>Popular Movies</Container>
      </h3>
      <Container fluid>
        <Row>
          {entries.map((movie) => (
            <Col key={movie.title} sm={12} md={6} lg={4} xl={3}>
              { (movie.releaseYear >= 2010 && movie.programType === "movie")? <Tile movie={movie} year={movie.releaseYear} type={movie.programType} image={movie.image} /> : "" }
              </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Movies
