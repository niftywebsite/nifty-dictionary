import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning my-4">
      <h4>{props.data.partOfSpeech}</h4>
      {props.data.definitions.map((definition, index) => {
        return (
          <ul key={index}>
            <Definition data={definition} />
          </ul>
        );
      })}
      <Synonyms data={props.data.synonyms} />
    </div>
  );
}
