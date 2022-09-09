import { useState } from "react";
import Search from "./Search";
import Results from "./Results";


function Dictionary() {
const [word, setWord] = useState("");

const handleWordSubmit = (word) => {
    setWord(word);
}

  return (
    <>
      <Search onSubmit={handleWordSubmit} />
      <Results data={word} />
    </>
  );
}

export default Dictionary;
