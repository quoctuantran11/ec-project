import React from "react";
import PropTypes from "prop-types";

// import { Link } from "react-router-dom";
// import Button from "../Button";

const ServiceBox = (props) => {
  return (
    <div className="service-box">
      <div className="service-box__image">
        <img src={props.img} alt="" />
      </div>
      <div className="service-box__info">
        <div className="service-box__info__name">{props.name}</div>
        <div className="service-box__info__description">
          {props.description}
        </div>
      </div>
      <div className="service-box__number">
        <div className="service-box__number__price">{props.price}</div>
        <div className="service-box__number__time">{props.time}</div>
        {/* <div className="service-box__number__btn">
          <Button>Book</Button>
        </div> */}
      </div>
    </div>
  );
};

ServiceBox.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ServiceBox;
