import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import Button from "../Button";

const MembershipInfo = (props) => {
  return (
    <div className="membership-info" style={{ backgroundColor: props.color }}>
      <div className="membership-info__image">
        <img src={props.img} alt="" />
      </div>
      <div className="membership-info__info">
        <div className="membership-info__info__name">{props.name}</div>
        <div className="membership-info__info__description">
          {props.description}
        </div>
        <div className="membership-info__btn">
          <Link to={`/membership/${props.slug}`}>
            <Button>Detail</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

MembershipInfo.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default MembershipInfo;
