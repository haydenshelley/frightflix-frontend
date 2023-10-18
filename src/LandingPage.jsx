import { Link } from "react-router-dom";

export function LandingPage() {
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
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/worlds-smallest-dogs-1647336453.jpg?crop=0.493xw:0.987xh;0.505xw,0.00326xh&resize=640:*"
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption">
              <h5>Movie Name</h5>
              <p>Movie Description</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption">
              <h5>Movie Name</h5>
              <p>Movie Description</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg"
              className="d-block w-100 carousel-image"
              alt="..."
            />
            <div className="carousel-caption">
              <h5>Movie Name</h5>
              <p>Movie Description</p>
            </div>
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
      <Link to="/movies/not-so-scary">Not-So-Scary</Link>
      <br />
      <Link to="/movies/scary">Scary</Link>
      <br />
      <Link to="/movies/extremely-scary">Extremely Scary</Link>
      <br />
      <Link to="/movies/random/not-so-scary">Random Not-So-Scary</Link>
      <br />
      <Link to="/movies/random/scary">Random Scary</Link>
      <br />
      <Link to="/movies/random/extremely-scary">Random Extremely Scary</Link>
    </div>
  );
}
