import React from "react";
import PropTypes from "prop-types";

// import { Link } from "react-router-dom";
// import Button from "../Button";

const MembershipBox = (props) => {
  return (
    <div className="membership-box">
      <div className="membership-box__image">
        <img src={props.img} alt="" />
      </div>
      <div className="membership-box__info">
        <div className="membership-box__info__name">{props.name}</div>
        <div className="membership-box__info__description">
          {props.description}
        </div>
      </div>
      <div className="membership-box__number">
        <div className="membership-box__number__price">{props.price}</div>
        <div className="membership-box__number__time">{props.time}</div>
      </div>
    </div>
  );
};

MembershipBox.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MembershipBox;
