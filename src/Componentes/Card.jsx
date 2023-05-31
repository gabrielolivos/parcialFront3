import styleCard from "../App.css"

const Card = ({orden,unidades}) => {
  return (
    <div className="cardPrincipal">
      <p>Hola, registramos tu orden de {orden} por {unidades} unidades</p>
    </div>
  )
}

export default Card
