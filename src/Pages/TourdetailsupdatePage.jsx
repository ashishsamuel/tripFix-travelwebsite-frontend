import React, { useContext, useEffect, useRef, useState } from 'react'
import './TourdetailsupdatePage.css'
import { Button, Col, Container, Form, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

import Newsletter from '../shared/Newsletter'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom'

function TourdetailsupdatePage() {

  const [tourData,setTourData] = useState()
  const [booking,setBooking] = useState({
    fullName:"",phone:"",guestSize:"",bookAt:""
  })
  const navigate = useNavigate()
  const [price,setPrice] = useState(0)

const serviceFee = 10
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)
  const handleChange = (e)=>{
    setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
}

const updateBooking = async(e)=>{
  e.preventDefault()
  try {


    const res = await fetch(`${BASE_URL}/booking/updatebooking/${tourData?._id}`,{
      method:'put',
      headers:{
        'content-type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(booking)
    })

    const result = await res.json()
    
    if(!res.ok){
      return alert(result.message)
    }

    navigate('/thank-you')
  } catch (err) {
    alert(err.message)
  }
}


  useEffect(()=>{
    setTourData(JSON.parse(sessionStorage.getItem("tourData")))


  },[])

  useEffect(()=>{

    const originalDateString = tourData?.bookAt;

    // Create a Date object from the original date string
    const originalDate = new Date(originalDateString);

    // Extract day, month, and year components from the Date object
    const day = originalDate.getUTCDate();
    const month = originalDate.getUTCMonth() + 1; // Months are zero-based, so add 1
    const year = originalDate.getUTCFullYear();

    // Add leading zero to single-digit month and day
const formattedMonth = month < 10 ? '0' + month : month;
const formattedDay = day < 10 ? '0' + day : day;

    // Format the components into the desired date string
    const formattedDateString = `${year}-${formattedMonth}-${formattedDay}`;


    setBooking({...booking,fullName:tourData?.fullName || "",phone:tourData?.phone || "",guestSize:tourData?.guestSize || "",bookAt:formattedDateString || ""})
setPrice(tourData?.tourDetails[0]?.price)


  },[tourData])



  return (
    <>
      <section className="mt-5">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="tour_content">
                <img
                  src={`/${tourData?.tourDetails[0]?.photo}`}
                  alt="image tour"
                  width={"700"}
                  height={"450"}
                />

                <div className="tour_info">
                  <h2>{tourData?.tourDetails[0]?.title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span>
                      <i class="fa-solid fa-map-location-dot"></i>
                      {tourData?.tourDetails[0]?.address}
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span>
                      <i class="fa-solid fa-location-dot"></i>
                      {tourData?.tourDetails[0]?.city}
                    </span>
                    <span>
                      <i class="fa-solid fa-dollar-sign"></i>
                      {tourData?.tourDetails[0]?.price} / per person
                    </span>
                    <span>
                      <i class="fa-solid fa-location-dot"></i>
                      {tourData?.tourDetails[0]?.distance} k/m
                    </span>
                    <span>
                      <i class="fa-solid fa-user-group"></i>
                      {tourData?.tourDetails[0]?.maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{tourData?.tourDetails[0]?.desc}</p>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="booking">
                <div className="booking_top d-flex align-items-center justify-content-between">
                  <h3>
                    ${tourData?.tourDetails[0]?.price}
                    <span>/per person</span>
                  </h3>
                </div>

                {/* booking form */}
                <div className="booking_form">
                  <h5>Information</h5>
                  <Form className="booking_info-form" onSubmit={updateBooking}>
                    <FormGroup className="mb-2">
                      <input
                        type="text"
                        placeholder="Full Name"
                        id="fullName"
                        value={booking.fullName}
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mb-2">
                      <input
                        type="number"
                        placeholder="Phone"
                        id="phone"
                        value={booking.phone}
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center mb-2">
                      <input
                        type="date"
                        placeholder=""
                        id="bookAt"
                        required
                        value={booking.bookAt}
                        onChange={handleChange}
                      />
                      <input
                        type="number"
                        className="ms-2"
                        placeholder="Guest"
                        id="guestSize"
                        value={booking.guestSize}
                        required
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Form>
                </div>

                {/* booking bottom */}
                <div className="booking_bottom">
                  <ListGroup>
                    <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-between">
                      <h6 className="d-flex align-items-center gap-1">
                        ${tourData?.tourDetails[0]?.price} <i class="fa-solid fa-xmark"></i> 1 person
                      </h6>
                      <span>${tourData?.tourDetails[0]?.price}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 d-flex align-items-center justify-content-between">
                      <h6>Service charge</h6>
                      <span>${serviceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total d-flex align-items-center justify-content-between">
                      <h6>Total</h6>
                      <span>${totalAmount}</span>
                    </ListGroupItem>
                  </ListGroup>
                  <Button
                    className="btn btn-warning w-100 mt-4"
                    onClick={updateBooking}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </Col>
          </Row> 
        </Container>
      </section>
      <Newsletter />
    </>
  );
}

export default TourdetailsupdatePage
