import React from "react";

import "./index.scss";

import background from "../../assets/footer-bg.jpg";

const PageHeader = (props) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
