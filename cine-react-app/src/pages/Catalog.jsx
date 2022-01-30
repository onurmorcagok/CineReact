import React from "react";

import { useParams } from "react-router";

import PageHeader from "../components/PageHeader";

import { category as movieCategory } from "../api/tmdbApi";

import MovieGrid from "../components/MovieGrid";

function Catalog() {
  const { category } = useParams();

  //console.log(category);
  return (
    <React.Fragment>
      <PageHeader>
        {category === movieCategory.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Catalog;
