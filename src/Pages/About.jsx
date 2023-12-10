import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import discover from '../Assets/aboutimages/discover.png'
import handshake from '../Assets/aboutimages/handshake.png'
import booking from '../Assets/aboutimages/booking.jpg'
import paperwork from '../Assets/aboutimages/paperworkimg.png'

function About() {
  return (
    <div className="about-maindiv">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} className="my-5">
            <h5>History </h5>
            <div className="d-flex justify-content-center align-items-center">
              Our story begins in 2015 when 4 of us planned a trip to Goa. The
              trip didnt go well as we planned where we faced a lot of
              difficulties in terms of accomodation, food, transportation. We
              struggled a lot for finding best places to visit in goa at the
              correct time. It was Athira who suggested the idea of starting
              something that will help people to book everything related to a
              journey at the time of planning the trip itself. Thats how TripFix
              was launched....Since it was completely out of the experience and
              difficulties that we faced we worked hard for launching it. Our
              group consists of 4 people Athira, Ashish, Rose and Akash TripFix
              would arrange trips to more than 150 countries by 2026 to its
              members.
              <br />
              The name 'TripFix' was suggested by Rose as she was the one who
              always fix trips among us. TripFix always believe in the quote
              "Don't watch life go by - get out there and live it!" TripFix
              provides you the best transporation, accomodation,food and
              qualified tour guides.
            </div>
          </Col>
        </Row>
        <Row>
          <h5 className='mb-5'>Why choose TripFix ?</h5>

          <Col
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="transportation"
          >
            <div className='text-light'>
              <h5>Transportation Facilities</h5>
              <div>
                <p>24*7 service with equal passion and commitment</p>
                <p>Professionally trained chauffers for the service</p>
                <p>Fully AC vehicles and comfortable seats to relax</p>
                <p>
                  We follow the government taxi rates and we are transparent
                  about charging money
                </p>
              </div>
            </div>
          </Col>
          <Col
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="accomodation"
          >
            <div className='text-light'>
              <h5>Accomodation Facilities</h5>
              <div>
                <p>Fully furnished rooms</p>
                <p>High speed WiFi connection</p>
                <p>Room Service in every two days</p>
                <p>
                  Affordable rates and 40% discounts for TripFix plus members
                </p>
              </div>
            </div>
          </Col>

          <Col
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="tour-guide"
          >
            <div className='text-light'>
              <h5>Tour Guide Availability</h5>
              <div>
                <p>Highly qualified tour guides</p>
                <p>Provides friendly and dedicated service to the tourists</p>
                <p>Excellent Interactive and Communication skills</p>
                <p>Internationally Licensed Tour guides</p>
              </div>
            </div>
          </Col>

          <Col
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="food"
          >
            <div className='text-light'>
              <h5>Food Facilities</h5>
              <div>
                <p>24*7 service restaurants with best quality foods</p>
                <p>Professionally qualified chefs for the service</p>
                <p>Varities of Chineese, Arabain, Indian and Mexican dishes available</p>
                <p>
                  Internationally Licensed Chefs
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <h5 className='mt-5'>How it works ? </h5>

          <Col sm={12} md={12} lg={12} xl={12} className="my-5 discover">
            <Row style={{ height: "auto" }}>
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={discover}
                  className="workhow-img"
                  alt="discover image"
                  width={"200px"}
                />
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column">
                <h6>Discover</h6>
                <p>
                  Discover from a range of best places provided on our website.
                  Choose the place according to your needs.
                </p>
                <p>
                  If you are not satisfied with the listings given on the
                  website, We will find the place according to your preferences.
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} className="my-5 discover">
            <Row style={{ height: "auto" }}>
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={handshake}
                  className="workhow-img"
                  alt="discover image"
                  width={"200px"}
                />
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column">
                <h6>Finalize your Place</h6>
                 
                <p>
                Our expert place consultants will help you with additional details you need regarding the place and the packages available.
                </p>
                <p>
                It will also include details regarding the accomodation, transportation, Food and application fee involved in the booking process.
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} className="my-5 discover">
            <Row style={{ height: "auto" }}>
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={paperwork}
                  className="workhow-img"
                  alt="discover image"
                  width={"200px"}
                />
                
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column">
                <h6>Get your paperwork done</h6>
                <p>
                After finalizing your place, contact us we wll start the paperwork for you.
                </p>
                <p>
                  If you are not satisfied with the listings given on the
                  website, We will find good tourist spot according to your preferences.
                </p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12} className="my-5 discover">
            <Row style={{ height: "auto" }}>
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={booking}
                  className="workhow-img"
                  alt="discover image"
                  width={"200px"}
                />
              </Col>
              <Col className="d-flex justify-content-center align-items-center flex-column">
                <h6>Your Trip is booked.</h6>
                <p>
                You can book the trip through the website by specifying the number of persons and also the date.
                </p>
                <p>
                Now you can sit back and prepare for your journey. You can update any change in the trip plan before 1 month of the booked date.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About
