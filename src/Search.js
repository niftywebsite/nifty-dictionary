import { useState } from "react";
import axios from "axios";

function Search() {
  const [word, setWord] = useState("");

  function handleRespond(respond) {
    console.log(respond.data[0]);
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
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={handleChange}
        autoFocus={true}
        placeholder="enter word"
      />
      <input type="submit" value="Search" className="btn btn-primary" />
    </form>
  );
}

export default Search;
