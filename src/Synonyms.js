import React from "react";

export default function Synonyms(props) {
  if (props.data[0]) {
    return (
      <div className="Synonyms">
        Synonyms:
        {props.data.map((synonym, index) => {
          return (
            <span className="px-2" key={index}>
              {synonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
