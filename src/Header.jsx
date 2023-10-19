import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <nav>
        <Link to="/" className="home-link">
          I want to go home now
        </Link>
      </nav>
    </div>
  );
}
