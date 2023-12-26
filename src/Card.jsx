export default function Card({name,imgUrl}){
  return (
    <div>
      <img src={imgUrl} alt="name"/>
      <h1>{name}</h1>
    </div>
  )
}