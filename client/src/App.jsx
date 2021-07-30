import React from 'react'
import { Route } from 'react-router-dom'
import Product from './Products/components/Product'
import ProductLayout from './Products/components/ProductLayout'

function App() {
  return (
    <div>
      <Route exact path='/' component={ProductLayout} />
      <Route exact path='/:id' component={Product} />
    </div>
  )
}

export default App