import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";

export function MovieShow() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}.json`).then((response) => {
      setMovie(response.data);
    });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} width="400px" height="300px" />
      <p>{movie.year}</p>
      <p>{movie.description}</p>
    </div>
  );
}
