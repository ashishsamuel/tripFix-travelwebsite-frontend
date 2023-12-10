import React from 'react'
import './FeaturedTours.css'
import TourCard from '../shared/TourCard'
import { Col } from 'react-bootstrap'
import useFetch from '../hooks/useFetch.js'
import {BASE_URL} from '../utils/config.js'



function FeaturedTours() {

  const {data:featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`)
    
  return (
    <>
  {
    loading && <h4>Loading..........</h4>
  }
  {
    error && <h4>{error}</h4>
  }
      {!loading && !error &&
        featuredTours?.map(tour=>(
            <Col lg={3} md={6} className='mb-4' key={tour.id}>
                <TourCard tour={tour}/>
            </Col>
        ))
      }
    </>
  )
}

export default FeaturedTours
