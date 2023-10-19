import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LandingPage } from "./LandingPage";
import { MovieShow } from "./MovieShow";
import { RandomMovieShow } from "./RandomMovieShow";

export function Content() {
  const [movies, setMovies] = useState([]);

  const handleIndexMovies = () => {
    axios.get("http://localhost:3000/movies.json").then((response) => {
      setMovies(response.data);
    });
  };

  useEffect(handleIndexMovies, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage movies={movies} />} />
        <Route path="/movies/:id" element={<MovieShow />} />
        <Route
          path="/movies/random/:category_name"
          element={<RandomMovieShow />}
        />
      </Routes>
    </div>
  );
}
