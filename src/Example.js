import React from "react";

export default function Example(props) {
  if (props.data) {
    return (
      <div>
        <em>Example: {props.data}</em>
      </div>
    );
  } else {
    return null;
  }
}
