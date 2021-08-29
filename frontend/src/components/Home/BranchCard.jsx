import React from "react";
import PropTypes from "prop-types";

const BranchCard = (props) => {
  return (
    <div className="branch-card">
      <div className="branch-card__image">
        <img src={props.img} alt="" />
      </div>
      <div className="branch-card__info">
        <div className="branch-card__info__name">{props.name}</div>
        <div className="branch-card__info__description">
          {props.description}
        </div>
      </div>
    </div>
  );
};

BranchCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BranchCard;
