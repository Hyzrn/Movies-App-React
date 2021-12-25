import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import { landingPageDTO, movieDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "Spider-Man: No Way Home",
            poster:
              "https://upload.wikimedia.org/wikipedia/tr/thumb/e/e7/Örümcek-Adam_Eve_Dönüş_Yok_afiş.jpg/220px-Örümcek-Adam_Eve_Dönüş_Yok_afiş.jpg",
          },
          {
            id: 2,
            title: "Luca",
            poster:
              "https://upload.wikimedia.org/wikipedia/tr/thumb/5/59/Luka_afi%C5%9F.jpg/220px-Luka_afi%C5%9F.jpg",
          },
        ],
        upcomingReleases: [
          {
            id: 3,
            title: "Soul",
            poster:
              "https://upload.wikimedia.org/wikipedia/tr/thumb/9/9b/Soul_afi%C5%9F.jpg/220px-Soul_afi%C5%9F.jpg",
          },
        ],
      });
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className="container">
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
  );
}

export default App;
