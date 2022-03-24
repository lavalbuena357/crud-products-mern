import React from 'react'
import ProductList from '../Components/ProductList'
import { Button, HomeCtn } from '../styles/Styles'

function Home() {

  function handleClick() {
    console.log('test')
  }

  return (
    <HomeCtn>
      <Button onClick={handleClick}>Agregar Producto</Button>
      <ProductList />
    </HomeCtn>
  )
}

export default Home