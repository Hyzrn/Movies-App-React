import React from "react";
import ActorForm from "./ActorForm";

export default function EditActor() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorForm
        model={{ name: "Tom", dateOfBirth: new Date("2022-01-01T00:00:00") }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
