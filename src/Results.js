import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Images from "./Images";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results my-3">
        <h1>{props.data.word}</h1>
        <div>
          {props.data.phonetics.map((phonetic, index) => {
            return <Phonetic data={phonetic} key={index} />;
          })}
        </div>
        <ol>
          {props.data.meanings.map((meaning, index) => {
            return <Meaning data={meaning} key={index} />;
          })}
        </ol>
        <Images word={props.data.word} />
      </div>
    );
  } else {
    return null;
  }
}
