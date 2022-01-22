import React from "react";
import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater() {
  return (
    <>
      <h3>Edit Movie</h3>
      <MovieTheaterForm
        model={{
          name: "Zorlu",
          latitude: 41.015792312227795,
          longitude: 28.948760032653812,
        }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
