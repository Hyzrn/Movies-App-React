import { useFormikContext } from "formik";
import React from "react";
import coordinateDTO from "../utils/coordinates.model";
import Map from "../utils/Map";

export default function MapField(props: mapFieldProp) {
  const { values } = useFormikContext<any>();

  function handleMapClick(coordinates: coordinateDTO) {
    values[props.latField] = coordinates.lat;
    values[props.lngField] = coordinates.lon;
  }

  return (
    <Map coordinates={props.coordinates} handleMapClick={handleMapClick} />
  );
}

interface mapFieldProp {
  coordinates: coordinateDTO[];
  latField: string;
  lngField: string;
}

MapField.defaultProps = {
  coordinates: [],
};
