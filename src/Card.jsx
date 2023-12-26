export default function Card({ name, imgUrl, characterId,handleCardClick, }) {
  return (
    <div onClick={handleCardClick} >
      <img src={imgUrl} alt="" data-characterid={characterId}/>
      <h2 data-characterid={characterId}>{name}</h2>
      <button onClick={handleCardClick} data-characterid ={characterId} >pick</button>
    </div>
  );
}
