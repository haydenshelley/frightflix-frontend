export function NotSoScary(props) {
  const notSoScaryMovies = props.movies.filter(
    (movie) => movie.category_id === 1
  );

  return (
    <div>
      <h1>Not-So-Scary</h1>
      {notSoScaryMovies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={movie.image}
            height="100px"
            width="100px"
            alt={movie.title}
          />
          <p>{movie.year}</p>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}
