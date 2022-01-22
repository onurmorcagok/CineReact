import React from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/Button";

import HeroSlider from "../components/Hero-Slider";

function Home() {
  return (
    <>
      <HeroSlider />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
