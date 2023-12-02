import React from 'react'
import './commonsection.css'
import { Col, Container, Row } from 'react-bootstrap'


function CommonSection({title}) {
  return (
    <section className='common_section'>
        <Container>
            <Row>
                <Col lg={12}>
                    <h3>{title}</h3>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection
