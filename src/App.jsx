import { useEffect, useState } from "react";
import Cards from "./Cards";

const url = "https://rickandmortyapi.com/api/character/?status=dead";
const gameStatusMessages = {
  ongoing: "Try to pick each card only once",
  win: "You've won! Click a card to play again",
  lose: "Sorry, Try to pick each card only once",
};

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(gameStatusMessages.ongoing);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setCharacters(response.results);
      });
  }, []);

  function randomizeCharacters() {
    const charactersRandomized = Array(characters.length).fill(null);
    const charactersCopy = [...characters];
    while (charactersCopy.length !== 0) {
      const index = Math.floor(Math.random() * characters.length);
      if (charactersRandomized[index] === null)
        charactersRandomized[index] = charactersCopy.pop();
    }
    setCharacters(charactersRandomized);
  }
  function handleCardClick(e) {
    randomizeCharacters();
    const updatedPicked = pickedCards.includes(
      e.target.getAttribute("data-characterid"),
    )
      ? []
      : [...pickedCards, e.target.getAttribute("data-characterid")];
    const newScore = pickedCards.includes(
      e.target.getAttribute("data-characterid"),
    )
      ? 0
      : score + 1;
    const newBestScore = newScore > bestScore ? newScore : bestScore;
    const newGameStatus =
      newScore === characters.length
        ? gameStatusMessages.win
        : newScore === 0 && gameStatus !== gameStatusMessages.win
          ? gameStatusMessages.lose
          : gameStatusMessages.ongoing;

    setPickedCards(updatedPicked);
    setScore(newScore);
    setBestScore(newBestScore);
    setGameStatus(newGameStatus);
  }
  if (characters.length !== 0)
    return (
      <>
        <h1>Score:{score}</h1>
        <h1>Best Score: {bestScore}</h1>
        <h2>{gameStatus}</h2>
        <Cards
          characters={characters}
          handleCardClick={handleCardClick}
        ></Cards>
      </>
    );
  else return <></>;
}
