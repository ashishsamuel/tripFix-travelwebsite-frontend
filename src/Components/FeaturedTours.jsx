import React from 'react'
import './FeaturedTours.css'
import TourCard from '../shared/TourCard'
import { Col } from 'react-bootstrap'
import { tourData } from '../Assets/tours'



function FeaturedTours() {
    
  return (
    <>
      {
        tourData?.map(tour=>(
            <Col lg={3} className='mb-4' key={tour.id}>
                <TourCard tour={tour}/>
            </Col>
        ))
      }
    </>
  )
}

export default FeaturedTours
