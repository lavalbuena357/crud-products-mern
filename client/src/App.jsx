import React from 'react'
import { Route } from 'react-router-dom'
import ProductLayout from './Products/components/ProductLayout'

function App() {
  return (
    <div>
      <Route exact path='/' component={ProductLayout} />
    </div>
  )
}

export default App