import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  return (
    <Link to={`/service/${props.slug}`}>
      <div className="service-card">
        <div className="service-card__image">
          <img src={props.img} alt="" />
        </div>
        <div className="service-card__info">
          <div className="service-card__info__name">{props.name}</div>
          <div className="service-card__info__description">
            {props.quantity}
          </div>
        </div>
      </div>
    </Link>
  );
};

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ServiceCard;
