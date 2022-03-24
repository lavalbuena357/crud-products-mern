import React from 'react'
import { Button } from '../styles/Styles'

function Home() {

  function handleClick() {
    console.log('test')
  }

  return (
    <div>
      <Button onClick={handleClick}>Agregar Producto</Button>
    </div>
  )
}

export default Home