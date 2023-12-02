import React from 'react'
import './Footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const quick_links = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/about",
    display:"About"
  },
  {
    path:"/tours",
    display:"Tours"
  }
]

const quick_links2 = [
  {
    path:"/gallery",
    display:"Gallery"
  },
  {
    path:"/login",
    display:"Login"
  },
  {
    path:"/register",
    display:"Register"
  }
]


function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="logo">
              <img src='/images/logo.png' alt="" />
              <p className='text-info'>Don't watch life go by - get out there and live it!.</p>

              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to={'#'}>
                    <i class="fa-brands fa-youtube"></i>
                  </Link>
                </span>

                <span>
                  <Link to={'#'}>
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                </span>

                <span>
                  <Link to={'#'}>
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </span>

                <span>
                  <Link to={'#'}>
                    <i class="fa-brands fa-twitter"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>


          <Col lg={3}>
            <h5 className='footer_link-title'>Discover</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link className='text-dark' to={item.path} style={{textDecoration:'none'}}>{item.display}</Link>
                  </ListGroupItem>

                ))
              }
            </ListGroup>
          </Col>

          <Col lg={3}>
            <h5 className='footer_link-title'>Quick Links</h5>
            <ListGroup className='footer_quick-links'>
              {
                quick_links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link className='text-dark' to={item.path} style={{textDecoration:'none'}}>{item.display}</Link>
                  </ListGroupItem>

                ))
              }
            </ListGroup>
          </Col>

          <Col lg={3}>
            <h5 className='footer_link-title'>Contact</h5>
            <ListGroup className='footer_quick-links'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span className='text-warning'><i class="fa-solid fa-location-dot"></i></span>
                      Address : 
                    </h6>

                    <p className='mb-0'>Kerala, India</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span className='text-warning'><i class="fa-solid fa-envelope"></i></span>
                      Email:
                    </h6>

                    <p className='mb-0'>tripfix@gmail.com</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span className='text-warning'><i class="fa-solid fa-phone"></i></span>
                      Phone : 
                    </h6>

                    <p className='mb-0'>+0123456789</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg={12} className='text-center pt-5'>
            <p className='copyright'>Copyright {year}, design and developed by 
            Ashish Samuel Thomson. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
