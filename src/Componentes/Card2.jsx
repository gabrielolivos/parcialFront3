import React from 'react'
import styleCard from "../App.css"

const Card2 = ({error}) => {
  return (
    <div className="cardError">
      <p>{error}</p>
    </div>
  )
}

export default Card2
