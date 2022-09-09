import { useState } from "react";
import axios from "axios";

 export default function Search ({ onSubmit } ) {
  const [word, setWord] = useState("");

  function handleRespond(respond) {
    onSubmit(respond.data[0].meanings[0].definitions[0].definition);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const APIUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(APIUrl).then(handleRespond);
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
      className="p-1"
        type="search"
        onChange={handleChange}
        autoFocus={true}
        placeholder="enter word"
      />
      <input type="submit" value="Search" className="btn btn-primary btn-lg ms-4 px-4 " />
    </form>
  );
}

