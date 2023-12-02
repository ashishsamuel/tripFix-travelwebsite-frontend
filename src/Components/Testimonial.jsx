import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cust1 from '../Assets/customerImages/cust1.jpeg'
import cust2 from '../Assets/customerImages/cust2.jpeg'
import cust3 from '../Assets/customerImages/cust3.jpeg'
import cust4 from '../Assets/customerImages/cust4.jpeg'
import cust5 from '../Assets/customerImages/cust5.jpeg'


function Testimonial() {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
       
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                },
            },
                {
                    breakpoint:576,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1
                    },
                },
            
        ]
    }
  return (
    <Slider {...settings}>


        <div className="testimonial py-4 px-3">
            <p className='customer-review'>It was a well organised trip by Travel Triangle and the great support of the travel agent Mr.Vinit. And Throughout the entire trip we enjoyed lot ,the car and driver provided for the tour is so good and comfortable Hotels are also good ,neat and clean.Thank you TripFix and Mr.Vinit.</p>
            
            <div className='d-flex align-items-center gap-4 mt-3 customer'>
                <img src={cust1} alt="image" className='w-25 h-25'/>
                <div>
                    <h6 className='mb-0 mt-3'>Aaron P Sam</h6>
                    <p className='text-success'>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className='customer-review'>Hotels which were given had a good and polite staff, good food and also good rooms with better views. Tour guide is very helpful throughout the trip, had an amazing experience while driving along the road with beautiful views.</p>
            
            <div className='d-flex align-items-center gap-4 mt-3 customer'>
            <img src={cust5} alt="image" className='w-25 h-25'/>

                <div>
                    <h6 className='mb-0 mt-3'>Adhil K Muhammad</h6>
                    <p className='text-success'>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className='customer-review'>It was a wonderful experience we enjoyed a lot the hotels were too good the taxi driver was good and the trip plan was superb we discovered many places enjoyed safari ride and a lot more adventure It was a wonderful experience we enjoyed a lot the hotels were too good the taxi driver was good.</p>
            
            <div className='d-flex align-items-center gap-4 mt-3 customer'>
                <img src={cust2} alt="image" className='w-25 h-25'/>
                <div>
                    <h6 className='mb-0 mt-3'>Abhiraj Venu</h6>
                    <p className='text-success'>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className='customer-review'>Anita, my parents had the best trip in Andamans! They were so happy with all the arrangements and everything was taken care of so perfectly. Thank you so much for planning out this trip! We are extremely satisfied with everything managed by you and the team in Andamans!</p>
            
            <div className='d-flex align-items-center gap-4 mt-3 customer'>
            <img src={cust3} alt="image" className='w-25 h-25'/>

                <div>
                    <h6 className='mb-0 mt-3'>Saino Mariam Daniel</h6>
                    <p className='text-success'>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className='customer-review'>Thanks Janeet! It was an amazing experience throughout our trip. The trip was well structured with proper arrangements. The cab service, visiting to different places and regular support/suggestions were great. Thanks for providing such an experience. Looking forward to collaborate again.</p>
            
            <div className='d-flex align-items-center gap-4 mt-3 customer'>
            <img src={cust4} alt="image" className='w-25 h-25'/>

                <div>
                    <h6 className='mb-0 mt-3'>Adhil Muhammad S</h6>
                    <p className='text-success'>Customer</p>
                </div>
            </div>
        </div>


    </Slider>
  )
}

export default Testimonial
