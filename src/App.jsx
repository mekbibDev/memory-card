import { useEffect, useState } from "react";
import Cards from "./Cards";
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
  if (characters.length !== 0)
    return (
      <>
        <Cards characters={characters}></Cards>
      </>
    );
  else return <></>;
}
