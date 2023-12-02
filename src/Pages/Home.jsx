import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FeaturedTours from '../Components/FeaturedTours';
import MasonryImagesGallery from './MasonryImagesGallery';
import Testimonial from '../Components/Testimonial';
import Newsletter from '../shared/Newsletter';

function Home() {
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

  const servicesData = [
    {
      imgUrl:'/images/transporticon.png',
      title:'Transportation Facilities',
      desc:'We provide you the best transportation that can make your trip so amazing.',
      width:'150px',
      height:'100px' 
    },
    {
      imgUrl:'/images/housingicon.png',
      title:'Accomodation Facilities',
      desc:'We provide you the best accomodation facilities that would make the trip fresh.',
      width:'135px',
      height:'100px' 
    },
    {
      imgUrl:'/images/tourguideicon.png',
      title:'Qualified Tour Guides',
      desc:'We provide you the best qualified tour guides who would help you to enrich your knowledge.',
      width:'120px',
      height:'100px' 
    }
  ]

  return (
    <>
      <div className="homemain-div">
        <Container className='mb-8'>
          <Row>
            <Col sm={12} md={6} lg={5} xl={6} className="my-5">
              <p className="customerslogan p-1 text-center bg-warning">
                Know Before You Go
              </p>
              <h3 className="mt-4">
                Navigate Your Next <span className="text-info">Adventure</span>
              </h3>

              <p className="my-5 travel-quote">
                Travel isn't always pretty. It isn't always comfortable.
                Sometimes it hurts, it even breaks your heart. But that's okay.
                The journey changes you; it should change you. It leaves marks
                on your memory, on your consciousness, on your heart, and on
                your body. You take something with you. Hopefully, you leave
                something good behind.
              </p>
            </Col>
            <Col sm={12} md={6} lg={7} xl={6} className="my-5">
              <img
                src="/images/travelimage4.jpeg"
                style={{ borderRadius: "50%" }}
                width={"500px"}
                alt="travel places image"
              />
            </Col>
          </Row>

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
        <section className="mt-5">
          <Container>
            <Row>
              <Col sm={3} md={3} lg={3} xl={3}>
                <h5 className="service_subtitle">What we serve</h5>
                <h2 className="service_title">We offer our best services</h2>
              </Col>
              {servicesData.map((service,index) => (
              <Col lg={3} key={index}>
                <div className="service_item mb-3">
                <div className="service_img">
                  <img src={service.imgUrl} alt="image of service" width={service.width} height={service.height}/>
                </div>
                <h5 className='fs-6 text-warning mt-4'>{service.title}</h5>
                <p>{service.desc}</p>
              </div>
              </Col>
              
            ))}
            </Row>

            
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg={12} className='mb-5'>
              <p className="customerslogan p-1 text-center bg-warning" style={{width:'10%'}}>
                Explore
              </p>
                <h2 className="featured_tour-title">Our Featured Tours</h2>
              </Col>
              <FeaturedTours/>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg={6}>
                <div className="experience_content">
                <p className="customerslogan p-1 text-center bg-warning" style={{width:'20%'}}>
                Experience
              </p>
              <h2>With our all experience <br/> we will serve you</h2>
              <p>The most beautiful in the world is, of course, the world itself.
                <br />
                Always render more and better service than is expected of you, no matter what your task may be.
              </p>
                </div>
                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span className='bg-warning'>12k+</span>
                    <h6>Successful Trip</h6>
                  </div>
                <div className="counter_box">
                    <span className='bg-warning'>2k+</span>
                    <h6>Regular Clients</h6>
                  </div>
                  <div className="counter_box">
                    <span className='bg-warning'>15</span>
                    <h6>Years experience</h6>
                  </div>
                  </div>
              </Col>
              <Col lg={6}>
                  <div className="experience_img mt-5">
                    <img src="/images/trip.jpg" className='rounded' alt="trip image" />
                  </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='mt-5'>
          <Container>
            <Row>
              <Col lg={12}>
              <p className="customerslogan p-1 text-center bg-warning" style={{width:'8%'}}>
                Gallery
              </p>
              <h2 className='gallery_title'>Visit our customers tour gallery</h2>
              </Col>
              <Col lg={12}>
                <MasonryImagesGallery/>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg={12}>
              <p className="customerslogan p-1 text-center bg-warning" style={{width:'8%'}}>
                Fans love
              </p>
              <h2 className="testimonial_title">What our fans say about us</h2>
              </Col>
              <Col lg={12}>
                <Testimonial/>
              </Col>
            </Row>
          </Container>
        </section>
        
        <Newsletter/>
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
      </div>
    </>
  );
}

export default Home
