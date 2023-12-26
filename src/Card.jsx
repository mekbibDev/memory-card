export default function Card({ name, imgUrl, randomizeCharacters }) {
  return (
    <div onClick={randomizeCharacters}>
      <img src={imgUrl} alt="name" />
      <h1>{name}</h1>
      <button onClick={randomizeCharacters}>pick</button>
    </div>
  );
}
