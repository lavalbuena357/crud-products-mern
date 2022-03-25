import React from 'react'
import { BoxButton, Card, BoxButtons, BoxInfo, BoxImage } from '../styles/Styles'
import { BsEyeFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions'
import { useNavigate } from 'react-router-dom'

function Product(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDelete(id) {
    await dispatch(deleteProduct(id))
  }

  function handleUpdate(id) {
    navigate(`/update-product/${id}`)
  }

  function handleDetail(id) {
    navigate(`/detail/${id}`)
  }

  return (
    <Card>
      <div>
        <BoxImage>
          <img src={props.image} alt="imagen" />
        </BoxImage>
      </div>
      <div>
        <BoxInfo> 
          <h2>{props.name}</h2>
          <p>Price: ${props.price} COP</p>
          <p>Amount: {props.size}</p>
          <p>Description: {props.description}</p>
        </BoxInfo>
        <BoxButtons>
          <BoxButton onClick={() => handleDetail(props.id)}><BsEyeFill /></BoxButton>
          <BoxButton onClick={() => handleUpdate(props.id)}><BsPencilSquare /></BoxButton>
          <BoxButton onClick={() => handleDelete(props.id)}><BsFillTrashFill /></BoxButton>
        </BoxButtons>
      </div>
    </Card>
  )
}

export default Product