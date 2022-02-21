import { useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import "./index.scss";

import logo from "../../assets/logo.gif";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

function Header() {
  const { pathName } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathName);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">
            <b>CineReact</b>
          </Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
