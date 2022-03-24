import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions'
import { Cards } from '../styles/Styles'
import Product from './Product'

function ProductList() {
  const [isLoading, setIsLoading] = useState(true)

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
    return (async () => {
      await dispatch(getProducts())
      setIsLoading(false)
    })()
  }, [products])

  return (
    <Cards>
      {
        isLoading ? <p>Cargando...</p>
        :
        products.map((el, i) => (
          <Product 
            key={i} 
            id={el._id}
            image={el.imgUrl} 
            name={el.name}
            price={el.unitaryPrice}
            size={el.size}
            description={el.description}
          />
        ))
      }
    </Cards>
  )
}

export default ProductList