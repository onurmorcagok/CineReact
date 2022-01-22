import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/Button";
import HeroSlider from "../components/Hero-Slider";
import MovieList from "../components/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

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
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
      </div>

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
      </div>

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV Series</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
      </div>

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV Series</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
}

export default Home;
