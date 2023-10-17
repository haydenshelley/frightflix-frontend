import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { LandingPage } from "./LandingPage";
import { NotSoScary } from "./NotSoScary";
import { Scary } from "./Scary";
import { MovieShow } from "./MovieShow";

export function Content() {
  const [movies, setMovies] = useState([]);

  const handleIndexMovies = () => {
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  useEffect(handleIndexMovies, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/movies/not-so-scary"
          element={<NotSoScary movies={movies} />}
        />
        <Route path="/movies/scary" element={<Scary movies={movies} />} />
        <Route path="movies/:id" element={<MovieShow />} />
      </Routes>
    </div>
  );
}
