import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./index.scss";

import { SwiperSlide, Swiper } from "swiper/swiper-react";
import { Link } from "react-router-dom";

import Button from "../Button/index";

import tmdbApi, { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const MovieList = (props) => {
  return <div></div>;
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
