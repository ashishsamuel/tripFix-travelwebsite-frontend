import React, { useEffect, useRef, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import './Tours.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TourCard from '../shared/TourCard';
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';


function Tours() {

  const [pageCount,setPageCount] = useState(0)
  const [page,setPage] = useState(0)
  const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours?page=${page}`)
  const {data:tourCount} = useFetch(`${BASE_URL}/tours/search/getTourCount`)
  const navigate = useNavigate()
  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)

  const searchHandler =async()=>{
    const location = locationRef.current.value.replace(/\s/g, "");
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if(location === '' || distance === '' || maxGroupSize === ''){
      toast.warning("All fields are required!")
    }
  
    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

    if(!res.ok){
      alert("Something went wrong")
    }

    else{
      const result = await res.json()

    navigate(`/tours/search?city=
    ${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state:result.data})
    }
  
  }

  useEffect(()=>{
    const pages = Math.ceil(tourCount/ 8) 
    setPageCount(pages)
    window.scrollTo(0,0)
  },[page,tourCount,tours])
  return (
    <>
      <CommonSection title={"All Tours"}/>
      <section>
        <Container>
          <Row className="mt-5">
            <Col sm={12} md={4} lg={3} xl={3} className="mt-4">
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
            <Col sm={12} md={4} lg={3} xl={3} className="mt-4">
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
            <Col sm={12} md={4} lg={3} xl={3} className="mt-4">
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
            <Col sm={12} md={4} lg={3} xl={3} className="mt-4">
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
          {
          loading && <h4 className='text-center pt-5'>Loading.......</h4>
          }
           {
          error && <h4 className='text-center pt-5'>{error}</h4>
          }
          {
            !loading && !error && 
            <Row className='mt-4'>
            {
              tours?.map((tour)=>(
                <Col className='mb-4' lg={3} key={tour.BASE_URLid}>
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
          }
        </Container>
      </section>

       <Newsletter/>           
    </>
  )
}

export default Tours
