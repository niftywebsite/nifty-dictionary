import { useState } from "react";

function Search() {
  const [word, setWord] = useState("");

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(word);
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
