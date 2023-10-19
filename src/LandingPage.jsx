import { Link } from "react-router-dom";

export function LandingPage(props) {
  if (!props.movies.length) {
    return <div>Loading...</div>;
  }

  const getRandomElements = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies = getRandomElements(props.movies, 3);

  const notSoScaryMovies = props.movies.filter(
    (movie) => movie.category_id === 1
  );

  const scaryMovies = props.movies.filter((movie) => movie.category_id === 2);

  const extremelyScaryMovies = props.movies.filter(
    (movie) => movie.category_id === 3
  );

  return (
    <div>
      <h1 className="creepster">Frightflix</h1>
      <div id="randomMovieCarousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#randomMovieCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#randomMovieCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#randomMovieCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to={`/movies/${randomMovies[0].id}`}>
              <img
                src={randomMovies[0].image}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={`/movies/${randomMovies[1].id}`}>
              <img
                src={randomMovies[1].image}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to={`/movies/${randomMovies[2].id}`}>
              <img
                src={randomMovies[2].image}
                className="d-block w-100 carousel-image"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#randomMovieCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#randomMovieCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p>Too scared to choose? Let me pick for you...</p>
      <div className="random-movies">
        <Link to="/movies/random/not-so-scary">Random Not-So-Scary</Link>
        <br />
        <Link to="/movies/random/scary">Random Scary</Link>
        <br />
        <Link to="/movies/random/extremely-scary">Random Extremely Scary</Link>
      </div>
      <p>Not-So-Scary</p>
      <div id="notSoScaryCarousel" className="carousel slide">
        <div className="carousel-indicators">
          {notSoScaryMovies.map((movie, index) => (
            <button
              key={movie.id}
              type="button"
              data-bs-target="#notSoScaryCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {notSoScaryMovies.map((movie, index) => (
            <div
              key={movie.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.image}
                  className="d-block w-100 carousel-image"
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#notSoScaryCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#notSoScaryCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p>Scary</p>
      <div id="scaryMoviesCarousel" className="carousel slide">
        <div className="carousel-indicators">
          {scaryMovies.map((movie, index) => (
            <button
              key={movie.id}
              type="button"
              data-bs-target="#scaryMoviesCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {scaryMovies.map((movie, index) => (
            <div
              key={movie.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.image}
                  className="d-block w-100 carousel-image"
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#scaryMoviesCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#scaryMoviesCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p>Extremely Scary</p>
      <div id="extremelyScaryMoviesCarousel" className="carousel slide">
        <div className="carousel-indicators">
          {extremelyScaryMovies.map((movie, index) => (
            <button
              key={movie.id}
              type="button"
              data-bs-target="#extremelyScaryMoviesCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {extremelyScaryMovies.map((movie, index) => (
            <div
              key={movie.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.image}
                  className="d-block w-100 carousel-image"
                  alt={movie.title}
                />
              </Link>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#extremelyScaryMoviesCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#extremelyScaryMoviesCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
