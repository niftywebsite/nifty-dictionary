import { useState } from "react";
import Search from "./Search";
import Results from "./Results";

function Dictionary() {
  const [word, setWord] = useState("");

  const handleWordSubmit = (word) => {
    setWord(word);
  };

  return (
    <div className="my-5">
      <Search onSubmit={handleWordSubmit} />
      <Results data={word} />
    </div>
  );
}

export default Dictionary;
