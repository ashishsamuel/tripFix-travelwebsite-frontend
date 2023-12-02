import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ThankYou.css'

function ThankYou() {
  return (
    <section>
        <Container>
            <Row>
                <Col lg={12} className='pt-5 text-center'>
                  <div className="thank_you">
                    <span>
                        <i class="fa-solid fa-circle-check"></i>
                        <h3 className="mb-3 fw-semibold">Thank You</h3>
                        <h6 className="mb-4">Your tour is booked.</h6>

                        <Button className='btn btn-warning w-25'><Link to={'/'} className='text-light fw-bold' style={{textDecoration:'none'}}>Back to Home</Link></Button>
                    </span>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou
