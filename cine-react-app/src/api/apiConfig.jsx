const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ee1025c5157f0d6dda8893d273a02ee8",
  originalImage: (imagePathName) =>
    `https://image.tmdb.org/t/p/original/${imagePathName}`,
  w500Image: (imagePathName500) =>
    `https://image.tmdb.org/t/p/w500/${imagePathName500}`,
};

export default apiConfig;
