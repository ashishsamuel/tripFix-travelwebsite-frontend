import React, { useContext, useEffect, useRef, useState } from 'react'
import './tourdetails.css'
import { Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../Assets/customerImages/avatar.jpg'
import Booking from '../Components/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch.js'
import {BASE_URL} from '../utils/config.js'
import {AuthContext} from '../Contexts/AuthContext.jsx'


function TourDetails() {
  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating,setTourRating]=useState(null)
  const {user} = useContext(AuthContext)

  // fetch data from database
  const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

  // destructure properties from tour object 
  const {photo,title,desc,price,address,reviews,city,distance,maxGroupSize} = tour

  const {totalRating,avgRating} = calculateAvgRating(reviews)

  // format date
  const options = {day:'numeric',month:'long',year:'numeric'}

  // submit request to the server 
  const submitHandler=async(e)=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    try {

      if(!user || user===undefined || user ===null){
        alert("Please sign in")
      }

      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:tourRating
      }
      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result = await res.json()
      if(!res.ok){
        return alert(result.message)
      }

      alert(result.message)

    } catch (err) {
        alert(err.message)
    }

  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])
  return (
    <>
      <section>
        <Container>
          {
            loading && <h4 className='text-center pt-5'>Loading.........</h4>
          }

          {
            error && <h4 className='text-center pt-5'>{error}</h4>
          }

          {
            !error && !loading &&
            <Row>
            <Col lg={8}>
              <div className="tour_content">
                <img src={`/${photo}`} alt="image tour" width={'700'} height={'450'}/>

                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                  <span className="tour_rating d-flex align-items-center gap-1">
              <i class="fa-solid fa-star text-warning"></i>{avgRating ===0 ? null : avgRating}
              {totalRating===0?('Not rated'):(<span>({reviews?.length})</span>)} 
            </span>

            <span>
            <i class="fa-solid fa-map-location-dot"></i>{address}
            </span>

                  </div>

                  <div className="tour_extra-details">
                  <span><i class="fa-solid fa-location-dot"></i>{city}</span>
                  <span><i class="fa-solid fa-dollar-sign"></i>{price} / per person</span>
                  <span><i class="fa-solid fa-location-dot"></i>{distance} k/m</span>
                  <span><i class="fa-solid fa-user-group"></i>{maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* tour reviews section */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span onClick={()=>setTourRating(1)}>1 <i class="fa-solid fa-star text-warning"></i></span>
                      <span onClick={()=>setTourRating(2)}>2 <i class="fa-solid fa-star text-warning"></i></span>
                      <span onClick={()=>setTourRating(3)}>3 <i class="fa-solid fa-star text-warning"></i></span>
                      <span onClick={()=>setTourRating(4)}>4 <i class="fa-solid fa-star text-warning"></i></span>
                      <span onClick={()=>setTourRating(5)}>5 <i class="fa-solid fa-star text-warning"></i></span>

                    </div>

                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required className='rounded'/>
                      <button className='btn btn-warning text-light'>Submit</button>
                    </div>
                  </Form>

                  <ListGroup className='user_reviews'>
                  {
                    reviews?.map(review=>(
                      <div className="review_item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString("en-US",options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>{review.rating}<i class="fa-solid fa-star text-warning"></i></span>
                          </div>

                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <Booking tour={tour} avgRating={avgRating}/>
            </Col>  
          </Row>
          }
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetails
