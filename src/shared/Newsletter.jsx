import React from 'react'
import './Newsletter.css'
import { Col, Container, Row } from 'react-bootstrap'


function Newsletter() {
  return (
    <section className='mt-5 newsletter'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="newsletter_content">
                    <h2>Subscribe now to get useful travelling information</h2>
                    <div className="newsletter_input">
                        <input type="email" placeholder='Enter your email' className='form-control'/>
                        <button className='btn btn-warning fw-bold newsetter_btn'>Subscribe</button>
                    </div>

                    <p>It seems that the more places I see and experience, the bigger I realize the world to be. The more I become aware of, the more I realize how relatively little I know of it, how many places I have still to go, how much more there is to learn.</p>
                </div>
            </Col>
            <Col lg={6}>
                <div className="newsletter_img">
                    <img src='/images/subscribe.png' width={'500px'} style={{borderRadius:'25px'}} alt="image" />
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter
