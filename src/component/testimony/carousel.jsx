/* eslint-disable no-unused-vars */
import React from 'react'
import { Data } from './data'
import './carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
   
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    
  return (
    <div className='testy-carousel-main'>
        <Slider {...settings}>
            {Data.map(main=>(
              <div key={main} className="each-review">
                   <div className="review-pix">
                          <img className='revimg' src={main.image} alt="" />
                    </div>
                <div className="complete-review">
                    <div className="name-pix">
                      <div className="name">{main.name}</div>
                    </div>
                    <div className="review">
                      {main.testy}
                    </div>
                </div>
              </div>
            ))}  
        </Slider>
      </div>
  )
}

export default Carousel
