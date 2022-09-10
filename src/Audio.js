import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Audio(props) {
  if (props.data) {
    return <ReactAudioPlayer className="" src={props.data} controls />;
  }
}
