import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <div className="d-flex text-muted py-2 align-items-center">
      <h5 className="pe-4">{props.data.text}</h5>
      <Audio data={props.data.audio} />
    </div>
  );
}
