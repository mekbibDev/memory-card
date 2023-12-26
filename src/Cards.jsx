import Card from "./Card";

export default function Cards({ characters, randomizeCharacters }) {
  return (
    <main>
      {characters.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          imgUrl={character.image}
          randomizeCharacters = {randomizeCharacters}
        ></Card>
      ))}
    </main>
  );
}
