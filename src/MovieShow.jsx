import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";

export function MovieShow() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}.json`).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  setTimeout(() => {
    setIsLoading(false);
  }, 500);

  if (isLoading) {
    return <div>Things are getting spooky!</div>;
  }

  return (
    <div>
      <Header />
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>Rated: {movie.Rated}</p>
      <p>Released: {movie.Year}</p>
      <p>Language: {movie.Language}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>{movie.Genre}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Directed By: {movie.Director}</p>
      <p>Metascore: {movie.Metascore}</p>
      <p>IMDb Rating: {movie.imdbRating}</p>
    </div>
  );
}
