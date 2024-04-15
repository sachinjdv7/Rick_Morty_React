import { useEffect, useState } from "react";

const useCharacterData = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
};

export default useCharacterData;
