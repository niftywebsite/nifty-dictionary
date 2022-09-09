import React from "react";
import Definition from "./Definition";
import Synonym from "./Synonym";

export default function Meaning(props) {
  return (
    <li key={props.key} className="Meaning m-3">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map((definition, index) => {
        return (
          <ul>
            <Definition data={definition} key={index} />
            <span>Synonyms:</span>
            {props.data.synonyms.map((synonym, index) => {
              return <Synonym data={synonym} key={index} />;
            })}{" "}
          </ul>
        );
      })}
    </li>
  );
}
