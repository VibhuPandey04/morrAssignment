import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const Tile = ({ movie, year, type }) => {
  return (
    <>
      <Row>
        <Col>
          <Card.Body>
            <Card.Title as='div'>
              <strong>{movie.title}</strong>
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>
    </>
  )
}

export default Tile
