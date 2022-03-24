import React, { useState } from 'react'
import Form from '../Components/Form'
import { BoxCtn, Subtitle } from '../styles/Styles'

function AddProduct() {
  const [product, setProduct] = useState({})

  return (
    <BoxCtn>
      <Subtitle>Add New Product</Subtitle>
      <Form />
    </BoxCtn>
  )
}

export default AddProduct