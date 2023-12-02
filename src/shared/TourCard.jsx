import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TourCard.css'


function TourCard({tour}) {
    const {id,title,city,photo,price,featured,reviews,height} = tour

    const totalRating = reviews?.reduce((acc,item)=>acc+item.rating,0)
    const avgRating = totalRating ===0?'':totalRating===1?totalRating:totalRating/reviews?.length
  return (
    <div className='tour_card'>
      <Card>
      <div className='tour_img'>
        {/* <Card.Img variant="top" src="/images/eveningimage.jpg" alt='tour image'/> */}
        <Card.Img variant="top" className='card-img' src={photo} height={height} alt='tour image'/>

        {featured && <span className='bg-warning text-light featured rounded'>Featured</span>}
      </div>
      <Card.Body>
        <div className="card_top d-flex align-items-center justify-content-between">
            <span className="tour_location d-flex align-items-center gap-1">
              <i class="fa-solid fa-location-dot text-warning"></i>{city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              <i class="fa-solid fa-star text-warning"></i>{avgRating ===0 ? null : avgRating}
              {totalRating===0?('Not rated'):(<span>({reviews.length})</span>)} 
            </span>
        </div>

        <h5 className='tour_title'>
            <Link to={`/tours/${id}`}>{title}</Link>
        </h5>
        <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5 className='text-warning'>${price}<span className='text-dark'>/per person</span></h5>
            <button className='btn btn-info booking_btn'>
                <Link to={`/tours/${id}`}>Book Now</Link>
            </button>

        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default TourCard
