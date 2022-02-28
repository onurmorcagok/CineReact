import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./index.scss";
import CastList from "../CastList";
import TrailerList from "../TrailerList";

import MovieList from "../../components/MovieList";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      console.log(response);
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h2 className="title">{item.title || item.name}</h2>
              <div className="tagline">
                <h3>{item.tagline}</h3>
              </div>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, id) => (
                    <span key={id} className="genres__item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <div className="release_date">
                <b>Release Date: {item.release_date}</b>
              </div>
              <div className="spoken_languages">
                <b>
                  Spoken Languages:
                  {item.spoken_languages.map((lang) => (
                    <b>{" " + lang.name + " "}</b>
                  ))}
                </b>
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Cast</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section mb-3">
              <TrailerList id={item.id} />
            </div>
            <div className="section mb-3">
              <div className="section__header mb-2">
                <h2 className="title__category">Similar {category}</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
