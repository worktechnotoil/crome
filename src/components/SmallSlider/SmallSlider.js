import React from 'react';
import './SmallSlide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { topSlide } from '../../data';

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "white", fontSize: "20px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "white", fontSize: "20px" }} />
      </div>
    );
  };
  const settings = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 7,
    infinite: false,
    slidesToScroll: 3,

    
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
       
      },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
         
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 4,
        
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
   
        }
      },
    ],
  };
  

const SmallSlider = () => {
  return (
    <div
    style={{ display: "flex", justifyContent: "center", marginTop: "1px" }}
  >
    <div style={{ width: "85%" }}>
      <Slider
        {...settings}
        prevArrow={<PreviousBtn />} 
        nextArrow={<NextBtn />}
        slidesToShow={7}
        slidesToScroll={1}
        infinite={false}
        variableWidth= {true}
      >
        {topSlide.map(({image, name}, index) => (
            <div className='small-slider' key={index.toString()}>
          <img src={image} alt={name} />
          <p className='title-name'>{name}</p>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  )
}

export default SmallSlider;