import React from "react";

export default function Audio(props) {
  if (props.data) {
    return <a href={props.data}>Listen</a>;
  }
}
