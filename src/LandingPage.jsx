import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
      <h1>Frightflix</h1>
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
