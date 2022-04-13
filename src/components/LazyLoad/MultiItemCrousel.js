import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { multiData } from "../../data";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Card from "./Card";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "30px" }} />
    </div>
  );
};
const settings = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 3,
  centerMode: false,
  
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        slidesToScroll: 1,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  return (
    <div
    style={{ display: "flex", justifyContent: "center", marginTop: "1px" }}
  >
    <div style={{ width: "80%" }}>
      <Slider {...settings}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        slidesToShow={3}
        slidesToScroll={1}
        infinite={false}
      >
        {multiData.map((item, index) => (
          <Card item={item}  key={index.toString()}/>
        ))}
      </Slider>
    </div>
  </div>
);
};



export default MultiItemCarousel;
