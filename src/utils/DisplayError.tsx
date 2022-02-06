import React from "react";

export default function DisplayError(props: displayErrorsProps) {
  return (
    <>
      {props.errors ? (
        <ul>
          {props.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

interface displayErrorsProps {
  errors?: string[];
}
