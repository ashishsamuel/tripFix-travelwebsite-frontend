import React, { useState } from 'react'
import CommonSection from '../shared/CommonSection'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'


function SearchResultList() {

    const location = useLocation()
    const [data] = useState(location.state)


  return (
    <>
      <CommonSection title={'Tour Search Result'}/>
      <section className='mt-5'>
        <Container>
          <Row>
            {
              data?.length===0?<h4 className='text-center'>No tour found</h4>
              :data?.map((tour)=>(
                <Col lg={3} className='mb-4' key={tour._id}>
                  <TourCard tour={tour}/>
                </Col>
              ))

            }
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default SearchResultList
