import React from "react";
import PropTypes from "prop-types";

const BannerTop = (props) => {
  return (
    <div
      className="banner-top"
      style={{
        backgroundImage: `linear-gradient(45deg,rgba(87, 90, 93, 0.6) 55%,rgba(96, 107, 106, 0.5)),url(${props.img})`,
      }}
    >
      <div className="banner-top__title">{props.title}</div>
    </div>
  );
};

BannerTop.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slugCate: PropTypes.string.isRequired,
};

export default BannerTop;
