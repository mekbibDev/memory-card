import Card from "./Card";

export default function Cards({ characters, handleCardClick }) {
  return (
    <main>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          imgUrl={character.image}
          characterId={character.id}
          handleCardClick = {handleCardClick}
        ></Card>
      ))}
    </main>
  );
}
