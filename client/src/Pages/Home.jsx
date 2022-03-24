import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../Components/ProductList'
import { Button, BoxCtn } from '../styles/Styles'

function Home() {

  const navigate = useNavigate()

  function handleClick() {
    navigate('/add-product')
  }

  return (
    <BoxCtn>
      <Button onClick={handleClick}>Agregar Producto</Button>
      <ProductList />
    </BoxCtn>
  )
}

export default Home