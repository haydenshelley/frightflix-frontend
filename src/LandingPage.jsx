import { Link } from "react-router-dom";

export function LandingPage(props) {
  const getRandomElements = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMovies = getRandomElements(props.movies, 3);
  console.log(randomMovies);

  return (
    <div>
      <h1 className="creepster">Frightflix</h1>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
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
              <img src={randomMovies[2].image} alt="..." />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="random-movies">
        <p>Too scared to choose? Enter a door instead...</p>
        <Link to="/movies/random/not-so-scary">Random Not-So-Scary</Link>
        <br />
        <Link to="/movies/random/scary">Random Scary</Link>
        <br />
        <Link to="/movies/random/extremely-scary">Random Extremely Scary</Link>
      </div>
      <Link to="/movies/not-so-scary">Not-So-Scary</Link>
      <br />
      <Link to="/movies/scary">Scary</Link>
      <br />
      <Link to="/movies/extremely-scary">Extremely Scary</Link>
    </div>
  );
}
