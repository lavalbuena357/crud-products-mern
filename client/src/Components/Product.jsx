import React from 'react'
import { BoxButton, Card, BoxButtons, BoxInfo } from '../styles/Styles'
import { BsEyeFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs"

function Product(props) {
  return (
    <Card>
      <BoxInfo>
        <img src={props.image} alt="imagen" />
        <h2>{props.name}</h2>
        <p>Price: ${props.price} COP</p>
        <p>Amount: {props.size}</p>
        <p>Description: {props.description}</p>
      </BoxInfo>
      <BoxButtons>
        <BoxButton><BsEyeFill /></BoxButton>
        <BoxButton><BsPencilSquare /></BoxButton>
        <BoxButton><BsFillTrashFill /></BoxButton>
      </BoxButtons>
    </Card>
  )
}

export default Product