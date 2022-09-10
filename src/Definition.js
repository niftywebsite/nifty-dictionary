import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Definition(props) {
  return (
    <li className="my-3">
      {props.data.definition}
      <Example data={props.data.example} />
    </li>
  );
}
