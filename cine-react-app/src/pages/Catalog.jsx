import React from "react";

import { useParams } from "react-router";

import PageHeader from "../components/PageHeader";

import { category as movieCategory } from "../api/tmdbApi";

function Catalog() {
  const { category } = useParams();

  //console.log(category);
  return (
    <React.Fragment>
      <PageHeader>
        {category === movieCategory.movie ? "Movies" : "TV Series"}
      </PageHeader>
    </React.Fragment>
  );
}

export default Catalog;
