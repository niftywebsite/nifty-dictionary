import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <li className="Meaning m-3">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map((definition, index) => {
        return (
          <ul key={index}>
            <Definition data={definition} />
          </ul>
        );
      })}
      <Synonyms data={props.data.synonyms} />
    </li>
  );
}
