import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Button from "../Button";

const ServiceInfo = (props) => {
  return (
    <div className="service-info" style={{ backgroundColor: props.color }}>
      <div className="service-info__image">
        <img src={props.img} alt="" />
      </div>
      <div className="service-info__info">
        <div className="service-info__info__name">{props.name}</div>
        <div className="service-info__info__description">
          {props.description}
        </div>
        <div className="service-info__btn">
          <Link to={`/service/${props.slug}`}>
            <Button>Learn more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceInfo.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ServiceInfo;
