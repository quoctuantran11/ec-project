import React from "react";
import PropTypes from "prop-types";

const TopSection = (props) => {
  return (
    <div className="top-section">
      <div className="top-section__info">
        <div className="top-section__info__title">{props.title}</div>
        <div className="top-section__info__description">
          {props.description}
        </div>
      </div>
      <div className="top-section__img">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

TopSection.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default TopSection;
