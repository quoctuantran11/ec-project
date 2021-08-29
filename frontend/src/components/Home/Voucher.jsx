import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Voucher1 from "../../assets/images/Voucher1.png";
import Voucher2 from "../../assets/images/Voucher2.jpg";
import Voucher3 from "../../assets/images/Voucher3.jpg";

const Voucher = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: false,
    autoplaySpeed: 5000,
  };
  return (
    <div className="voucher">
      <Slider {...settings}>
        <div className="voucher__item">
          <img src={Voucher1} alt="voucher1" className="voucher__img-child" />
        </div>
        <div className="voucher__item">
          <img src={Voucher2} alt="voucher2" className="voucher__img-child" />
        </div>
        <div className="voucher__item">
          <img src={Voucher3} alt="voucher3" className="voucher__img-child" />
        </div>
      </Slider>
    </div>
  );
};

export default Voucher;
