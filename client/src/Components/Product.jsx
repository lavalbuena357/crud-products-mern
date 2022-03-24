import React from 'react'
import { BoxButton, Card } from '../styles/Styles'
import { BsEyeFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs"

function Product(props) {
  return (
    <Card>
      <img src={props.image} alt="imagen" />
      <h2>{props.name}</h2>
      <p>Price: ${props.price} COP</p>
      <p>Amount: {props.size}</p>
      <p>Description: {props.description}</p>
      <div>
        <BoxButton><BsEyeFill /></BoxButton>
        <BoxButton><BsPencilSquare /></BoxButton>
        <BoxButton><BsFillTrashFill /></BoxButton>
      </div>
    </Card>
  )
}

export default Product