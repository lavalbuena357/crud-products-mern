import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Modal, Container } from 'react-bulma-components'
import AddButton from './AddButton'
import Header from './Header'
import ProductsList from './ProductsList'
import FormNew from './FormNew'
import { getProducts } from '../../redux/actions'
import Loading from './Loading'

function ProductLayout({ getProducts, products }) {
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isLoading, setIsLoading] = useState(true) 

  useEffect(() => {
    getProducts()
    setIsLoading(false)
  }, [])

  function handleAdd() {
    setIsOpenAdd(false)
  }

  return (
    <Container>
      <Header title='Products App' />
      <AddButton onClick={() => setIsOpenAdd(true)} />
      {isLoading && !products.length && <Loading />}
      <ProductsList />
      <Modal show={isOpenAdd} onClose={() => setIsOpenAdd(false)} showClose={false}>
        <Modal.Card>
          <Modal.Card.Header>
            <Modal.Card.Title>
              Add Product
            </Modal.Card.Title>
          </Modal.Card.Header>
          <Modal.Card.Body>
            <FormNew handleAdd={handleAdd} />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </Container>
  )
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductLayout)