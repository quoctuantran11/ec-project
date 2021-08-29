import React from "react";

import { Link } from "react-router-dom";

import Grid from "../Grid";

import logo from "../../assets/images/logo.png";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master.png";
import appstore from "../../assets/images/appstore.png";
import chplay from "../../assets/images/ggplay.png";
import hotline from "../../assets/images/hotline.png";
const footerAboutLinks = [
  {
    display: "Services",
    path: "/service",
  },
  {
    display: "Thematic",
    path: "/thematic",
  },
  {
    display: "Membership",
    path: "/membership",
  },
  {
    display: "Branch system",
    path: "/",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <div className="footer__content">
              <div className="footer__social-item">
                <Link to="/" className="fb">
                  <i className="bx bxl-facebook-circle"></i>
                </Link>
                <Link to="/" className="ins">
                  <i className="bx bxl-instagram"></i>
                </Link>
                <Link to="/" className="ytb">
                  <i className="bx bxl-youtube"></i>
                </Link>
              </div>
              <div className="footer__content">
                <p>Accepted payment</p>
                <img src={visa} className="footer__app-cash-item" alt="visa" />
                <img
                  src={master}
                  className="footer__app-cash-item"
                  alt="master"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="footer__title">ABOUT US</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">OPEN HOURS</div>
            <div className="footer__content">
              <p>Mon - Fri: 8:00AM - 6:00PM</p>
              <p>Weekends: 9:00AM - 5:00PM</p>
              <p>
                <i className="bx bxs-phone-call">
                  <strong>Hotline: 1800 1XXX</strong>
                </i>
              </p>
              <Link to="/">
                <img src={hotline} className="footer__hotline-icon" alt="" />
              </Link>
            </div>
          </div>
          <div>
            <div className="footer__title">ETERNAL CHARM APP</div>
            <div className="footer__content">
              <Link to="/">
                <img src={appstore} className="footer__app-badge-item" alt="" />
              </Link>
              <Link to="/">
                <img src={chplay} className="footer__app-badge-item" alt="" />
              </Link>
            </div>
          </div>
        </Grid>
      </div>
      <div className="footer__bottom">
        {" "}
        Copyright 2021 Team 2, CTDA. All Rights Reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;
