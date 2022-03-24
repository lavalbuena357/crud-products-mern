import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from '../Components/ProductList'
import { Button, HomeCtn } from '../styles/Styles'

function Home() {

  const navigate = useNavigate()

  function handleClick() {
    navigate('/add-product')
  }

  return (
    <HomeCtn>
      <Button onClick={handleClick}>Agregar Producto</Button>
      <ProductList />
    </HomeCtn>
  )
}

export default Home