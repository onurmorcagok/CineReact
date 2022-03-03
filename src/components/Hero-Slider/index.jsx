import { useState, useEffect, useRef } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button, { OutlineButton } from "../Button/index";
import Modal, { ModalContent } from "../Modal/index";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./index.scss";
import { useHistory } from "react-router-dom";

function HeroSlider() {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 5));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
      >
        {movieItems.map((movie, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={movie}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </div>
  );
}

const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = "https://youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No Trailer!";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="vote_average">
            <b>Vote Average: {item.vote_average}</b>
          </div>
          <div className="release_date">
            <b>Release Date: {item.release_date}</b>
          </div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Watch Now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);
  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlider;
