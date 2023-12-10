import React, { useContext, useState } from 'react'
import './Booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from '../Contexts/AuthContext'
import {BASE_URL} from '../utils/config.js'

function Booking({tour,avgRating}) {

    const {price,reviews, title } = tour
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const [booking,setBooking] = useState({
        userId:user && user._id, 
        tourId:tour._id,
        userEmail:user && user.email,
        tourName:title,
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })
    const handleChange = (e)=>{
        setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    const serviceFee = 10
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    // send data to the server
    const handleClick = async(e)=>{
        e.preventDefault()
        try {
          if(!user || user===undefined || user ===null){
            return alert("Please sign in")
          }

          const res = await fetch(`${BASE_URL}/booking`,{
            method:'post',
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

  return (
    <div className='booking'>
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>${price}<span>/per person</span></h3>
        <span className="tour_rating d-flex align-items-center">
              <i class="fa-solid fa-star text-warning"></i>{avgRating ===0 ? null : avgRating}({reviews?.length})
              </span>
      </div>


      {/* booking form */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className='booking_info-form' onSubmit={handleClick}>
            <FormGroup className='mb-2'>
                <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='mb-2'>
                <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center mb-2'>
                <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                <input type="number" className='ms-2' placeholder='Guest' id='guestSize' required onChange={handleChange}/>
            </FormGroup>
        </Form>
      </div>

      {/* booking bottom */}
      <div className="booking_bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0 d-flex align-items-center justify-content-between'>
               <h6 className='d-flex align-items-center gap-1'>${price} <i class="fa-solid fa-xmark"></i> 1 person</h6>
               <span>${price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 d-flex align-items-center justify-content-between'>
               <h6>Service charge</h6>
               <span>${serviceFee}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total d-flex align-items-center justify-content-between'>
               <h6>Total</h6>
               <span>${totalAmount}</span>
            </ListGroupItem>
        </ListGroup>
        <Button className='btn btn-warning w-100 mt-4' onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  )
}

export default Booking
