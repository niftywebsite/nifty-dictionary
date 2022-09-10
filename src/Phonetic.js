import React from "react";
import Audio from "./Audio";

export default function Phonetic(props) {
  return (
    <div>
      <span className="mx-2">{props.data.text}</span>
      <Audio data={props.data.audio} />
    </div>
  );
}
