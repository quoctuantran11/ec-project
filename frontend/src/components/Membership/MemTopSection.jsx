import React from "react";
import PropTypes from "prop-types";

const MemTopSection = (props) => {
  return (
    <div className="memtop-section">
      <div className="memtop-section__info">
        <div className="memtop-section__info__title">{props.title}</div>
        <div className="memtop-section__info__description">
          {props.description}
        </div>
      </div>
      <div className="memtop-section__img">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

MemTopSection.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default MemTopSection;
