export default function Card({ name, imgUrl, characterId,handleCardClick, }) {
  return (
    <div onClick={handleCardClick} >
      <img src={imgUrl} alt="" data-characterid={characterId}/>
      <h1 data-characterid={characterId}>{name}</h1>
      <button onClick={handleCardClick} data-characterid ={characterId} >pick</button>
    </div>
  );
}
