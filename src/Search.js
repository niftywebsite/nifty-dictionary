import { useState } from "react";
import axios from "axios";

export default function Search({ onSubmit }) {
  const [word, setWord] = useState("sunset");
  const [loaded, setLoaded] = useState(false);

  function search() {
    const dictionaryAPIUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(dictionaryAPIUrl).then(handleRespond);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleRespond(respond) {
    onSubmit(respond.data[0]);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <form className="Search d-flex my-5" onSubmit={handleSubmit}>
        <input
          className="form-control p-2 ps-4 w-75 lh-lg border rounded-pill"
          type="search"
          onChange={handleChange}
          autoFocus={true}
          placeholder="enter word"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary text-white ms-4 w-25 fw-bold rounded-pill"
        />
      </form>
    );
  } else {
    load();
    return <div>Loading</div>;
  }
}
