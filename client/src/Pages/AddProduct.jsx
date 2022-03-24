import React, { useState } from 'react'
import Form from '../Components/Form'
import { postProduct } from '../redux/actions'
import { BoxCtn, Subtitle } from '../styles/Styles'

function AddProduct() {
  const [product, setProduct] = useState({
    imgUrl: '',
    name: '',
    unitaryPrice: 0,
    size: 0,
    description: ''
  })

  return (
    <BoxCtn>
      <Subtitle>Add New Product</Subtitle>
      <Form 
        product={product} 
        setProduct={setProduct} 
        function={postProduct}  
        route='/'
      />
    </BoxCtn>
  )
}

export default AddProduct