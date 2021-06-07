import React from 'react'
import { Row, Col } from 'react-bootstrap'
import entries from '../Sample'


const Tile = () => {
  return (
    <>
      <Row>
        {entries.map((entry) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{entry.title}</h3>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Tile
