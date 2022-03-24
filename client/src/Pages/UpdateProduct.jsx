import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Form from '../Components/Form'
import { getProduct, updateProduct } from '../redux/actions'
import { BoxCtn, Subtitle } from '../styles/Styles'

function UpdateProduct() {  
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const detail = useSelector(state => state.detail)
  const {id} = useParams() 
  const dispatch = useDispatch()
  
  useEffect(() => {
    return (async() => {
      await dispatch(getProduct(id))
      setIsLoading(false)
    })()
  }, [])

  useEffect(() => {
    setProduct(detail)
  }, [detail])

  return (
    <BoxCtn>
      <Subtitle>Update Product</Subtitle>
      {(isLoading || !product) ? <p>cargando...</p>
        :
      <Form 
        id={id}
        product={product} 
        setProduct={setProduct} 
        function={updateProduct}  
        route='/'
      />
      }
    </BoxCtn>
  )
}

export default UpdateProduct