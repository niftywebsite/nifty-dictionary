import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results m-3">
        <h1>{props.data.word}</h1>
        <ol>
          {props.data.meanings.map(function (meaning, index) {
            return (
                <Meaning data={meaning} key={index} />
            );
          })}
        </ol>
      </div>
    );
  } else {
    return null;
  }
}
