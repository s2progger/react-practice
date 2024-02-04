import { useEffect, useState, useMemo } from "react";
import { API } from "../services/api";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [dependencies, setDependencies] = useState(0);

  // useMemo allows us to cache the movie list between re-renders
  const fetchMovies = useMemo(
    () => async () => {
      API.get("/movies").then((data) => {
        console.log("Fetching movies...");

        // Sort the movies by rating in descending order.
        // Normally you would do this on the server/database, but I wanted to demonstrate sorting in JavaScript.
        const movies = data.sort((a, b) => {
          return parseFloat(a.Rating) > parseFloat(b.Rating) ? -1 : 1;
        });
        setMovies(movies);
      });
    },
    [dependencies]
  );

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const addMovie = (e) => {
    e.preventDefault();

    const title = document.getElementById("new-title").value;
    const rating = document.getElementById("new-rating").value;

    console.log("Adding movie...", title, rating);

    API.post("/movies", { title, rating }).then(() => {
      setDependencies(dependencies + 1);
    });
  };

  return (
    <div>
      <h1>Movies</h1>

      <button onClick={() => setDependencies(dependencies + 1)}>Refresh</button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.MovieID}>
            {movie.Title} - {parseFloat(movie.Rating).toFixed(1)} -{" "}
            {movie.Genre.map((item) => item.genre).join(", ")}
          </li>
        ))}
      </ul>

      <form onSubmit={addMovie}>
        <h2>Add a movie</h2>
        <input type="text" id="new-title" placeholder="Title" />{" "}
        <input type="text" id="new-rating" placeholder="Rating" />{" "}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
