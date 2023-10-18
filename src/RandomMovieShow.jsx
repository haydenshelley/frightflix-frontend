import axios from "axios";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function RandomMovieShow() {
  const { category_name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/random/${category_name}.json`)
      .then((response) => {
        if (response.data.id) {
          navigate(`/movies/${response.data.id}`);
        }
      });
  }, [category_name, navigate]);

  return <div>Loading...</div>;
}
