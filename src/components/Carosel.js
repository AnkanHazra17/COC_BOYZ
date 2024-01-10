import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../assets/images/Saraswati2.jpg";
import Image2 from "../assets/images/Swaraswati3.png";
import Image3 from "../assets/images/Swaraswati 23.jpg";

const Carosel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
  };
  return (
    <div className="w-full">
      <div className=" w-[50%] h-[500px] mx-auto">
        <Slider {...settings} className="w-full">
          <div>
            <img src={Image1} alt="" className=" object-cover"></img>
          </div>
          <div>
            <img src={Image2} alt="" className=" object-cover"></img>
          </div>
          <div>
            <img
              src={Image3}
              alt=""
              className=" object-cover object-center"
            ></img>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carosel;
