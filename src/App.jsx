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

  function randomizeCharacters(){
    const charactersRandomized = Array(characters.length).fill(null);
    const charactersCopy = [...characters]
    while(charactersCopy.length !== 0){
      const index = Math.floor(Math.random() * characters.length)
      if(charactersRandomized[index] === null)
      charactersRandomized[index] = charactersCopy.pop();
    }
    setCharacters(charactersRandomized)
  }

  if (characters.length !== 0)
    return (
      <>
        <Cards characters={characters} randomizeCharacters = {randomizeCharacters}></Cards>
      </>
    );
  else return <></>;
}
