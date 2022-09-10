import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results m-3">
        <h1>{props.data.word}</h1>
        <ol>
          {props.data.phonetics.map((phonetic, index) => {
            return <Phonetic data={phonetic} key={index} />;
          })}
        </ol>
        <ol>
          {props.data.meanings.map((meaning, index) => {
            return <Meaning data={meaning} key={index} />;
          })}
        </ol>
      </div>
    );
  } else {
    return null;
  }
}
