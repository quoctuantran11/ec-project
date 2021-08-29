import React from "react";
import PropTypes from "prop-types";


const ThematicCard = (props) => {
  return (
    <div className="thematic-card">
      <div className="thematic-card__image">
        <img src={props.img} alt="" />
      </div>
      <div className="thematic-card__info">
        <div className="thematic-card__info__title">{props.title}</div>
        <div className="thematic-card__info__description">
          {props.description}
        </div>
      </div>
    </div>
  );
};

ThematicCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cate: PropTypes.string.isRequired,
};

export default ThematicCard;
