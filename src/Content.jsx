import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LandingPage } from "./LandingPage";
import { NotSoScary } from "./NotSoScary";
import { ExtremelyScary } from "./ExtremelyScary";
import { Scary } from "./Scary";
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
        <Route
          path="/movies/not-so-scary"
          element={<NotSoScary movies={movies} />}
        />
        <Route path="/movies/scary" element={<Scary movies={movies} />} />
        <Route
          path="/movies/extremely-scary"
          element={<ExtremelyScary movies={movies} />}
        />
        <Route path="/movies/:id" element={<MovieShow />} />
        <Route
          path="/movies/random/:category_name"
          element={<RandomMovieShow />}
        />
      </Routes>
    </div>
  );
}
