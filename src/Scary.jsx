import { Header } from "./Header";
import { Link } from "react-router-dom";

export function Scary(props) {
  const scaryMovies = props.movies.filter((movie) => movie.category_id === 2);

  return (
    <div>
      <Header />
      <h1>Not-So-Scary</h1>
      {scaryMovies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          <br />
          <img
            src={movie.image}
            height="300px"
            width="200px"
            alt={movie.title}
          />
          <p>{movie.year}</p>
          <p>{movie.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
