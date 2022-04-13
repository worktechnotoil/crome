import React from 'react';
import './FadeSlider.css'

import Slider from "react-slick";



const FadeSlider = () => {

const fadeImages = [
    "images/Slide1.jpeg",
    "images/Slide2.jpeg",
    "images/Slide3.jpeg"
];

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>  
     <Slider {...settings} className='lazy lazy-active previcons '>
       {
         fadeImages.map((fimg, index) =>{
           return(
            <div key={index.toString()}>
            <img src={ fimg } alt='...' />
            </div>
           )
         })
       }
          </Slider>

      
    </>
  )
}


export default FadeSlider;     


