import React from "react";

import "./index.scss";

import { Link } from "react-router-dom";

import footerBackground from "../../assets/footer-bg.jpg";

function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="footer__content container">
        <div className="footer__content__logo">Onur MORCAGÖK</div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
