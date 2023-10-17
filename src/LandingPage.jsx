import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div>
      <h1>Frightflix</h1>
      <Link to="/movies/not-so-scary">Not-So-Scary</Link>
      <br />
      <Link to="/movies/scary">Scary</Link>
    </div>
  );
}
