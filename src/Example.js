import React from "react";

export default function Example(props) {
  if (props.data) {
    return (
      <div className="Example text-secondary fst-italic my-2">
        Example: {props.data}
      </div>
    );
  } else {
    return null;
  }
}
