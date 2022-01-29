import React from "react";
import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectedGenres: genreDTO[] = [{ id: 2, name: "Drama" }];
  const selectedGenres: genreDTO[] = [{ id: 1, name: "Comedy" }];
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 2, name: "Agore" },
  ];
  const selectedActors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Chris",
      character: "Thor",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chris_Hemsworth_by_Gage_Skidmore_2.jpg/440px-Chris_Hemsworth_by_Gage_Skidmore_2.jpg",
    },
  ];
  const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: "Sambil" }];
  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "Toy Story",
          inTheaters: true,
          trailer: "url",
          releaseDate: new Date("2021-01-01T00:00:00"),
        }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={selectedActors}
      />
    </>
  );
}
