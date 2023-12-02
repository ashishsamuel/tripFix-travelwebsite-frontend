import React, { useEffect, useRef, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import './Tours.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tourData } from '../Assets/tours';
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter'

function Tours() {

  const [pageCount,setPageCount] = useState(0)
  const [page,setPage] = useState(0)

  useEffect(()=>{
    const pages = Math.ceil(5/ 4) //later we will use backend data count
    setPageCount(pages)
  },[page])

  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)

  const searchHandler =()=>{
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if(location === '' || distance === '' || maxGroupSize === ''){
      toast.warning("All fields are required!")
    }
  
  }
  return (
    <>
      <CommonSection title={"All Tours"}/>
      <section>
        <Container>
          <Row className="mt-5">
            <Col sm={1} md={3} lg={3} xl={3} className="mt-4">
              <div>
                <i class="fa-solid fa-location-dot"></i>
                <span className="ms-2">Location</span>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  ref={locationRef}
                  placeholder="Where are you going?"
                />
              </div>
            </Col>
            <Col sm={1} md={3} lg={3} xl={3} className="mt-4">
              <div>
                <i class="fa-solid fa-location-dot"></i>
                <span className="ms-2">Distance</span>
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  ref={distanceRef}
                  placeholder="Distance k/m"
                />
              </div>
            </Col>
            <Col sm={1} md={3} lg={3} xl={3} className="mt-4">
              <div>
                <i class="fa-solid fa-users"></i>
                <span className="ms-2">Max People</span>
              </div>
              <div>
                <input
                  type="number"
                  className="form-control"
                  ref={maxGroupSizeRef}
                  placeholder="0"
                />
              </div>
            </Col>
            <Col sm={1} md={3} lg={3} xl={3} className="mt-4">
              <div style={{ marginTop: "35px" }} onClick={searchHandler}>
                <i
                  class="fa-solid fa-magnifying-glass p-2"
                  style={{
                    backgroundColor: "orange",
                    borderRadius: "15px",
                    color: "white",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
      </section>
      <section>
        <Container>
          <Row className='mt-4'>
            {
              tourData?.map((tour)=>(
                <Col className='mb-4' lg={3} key={tour.id}>
                  <TourCard tour={tour}/>
                </Col>
              ))
            }

            <Col lg={12}>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number=>(
                  <span key={number} onClick={()=>setPage(number)} className={page===number? "active_page":""}>{number+1}</span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

       <Newsletter/>           
    </>
  )
}

export default Tours
