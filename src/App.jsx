import { useEffect, useState } from "react";
const url = "https://rickandmortyapi.com/api/character/?status=dead";
export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
      });
  }, []);
  return <></>;
}
