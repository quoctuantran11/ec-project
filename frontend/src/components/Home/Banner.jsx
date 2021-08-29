import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/images/banner1.jpg";
import Banner2 from "../../assets/images/Voucher2.jpg";
import Banner3 from "../../assets/images/Voucher3.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    appendDots: (dots) => (
      <div
        style={{
          padding: "40px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="banner__slider-item">
          <img
            src={Banner1}
            alt="banner1"
            className="banner__slider-img-child"
          ></img>
        </div>
        <div className="banner__slider-item">
          <img
            src={Banner2}
            alt="banner2"
            className="banner__slider-img-child"
          ></img>
        </div>
        <div className="banner__slider-item">
          <img
            src={Banner3}
            alt="banner3"
            className="banner__slider-img-child"
          ></img>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
