import React from "react";
import Example from "./Example";
import Synonym from "./Synonym";

export default function Definition(props) {
  return (
    <li className="my-3" key={props.index}>
      <h5>{props.data.definition}</h5>
      <Example data={props.data.example} />
      {props.data.synonyms.map((synonym, index) => {
        return <Synonym data={synonym} key={index} />;
      })}
    </li>
  );
}
