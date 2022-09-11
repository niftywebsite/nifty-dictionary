import React from "react";
import Example from "./Example";

export default function Definition(props) {
  return (
    <li className="my-3 ">
      {props.data.definition}
      <Example data={props.data.example} />
    </li>
  );
}
