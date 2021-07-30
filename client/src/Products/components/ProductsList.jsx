import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Card, Columns, Content, Heading, Button, Modal } from 'react-bulma-components'
import { FaTrashAlt, FaRegEdit, FaRegEye } from "react-icons/fa";
import { deleteProduct, getProducts, updateProduct } from '../../redux/actions'
import FormEdit from './FormEdit';

function ProductsList({ products, deleteProduct, getProducts }) {
  const [ isOpenDelete, setIsOpenDelete ] = useState(false)
  const [ isOpenEdit, setIsOpenEdit ] = useState(false)
  const [currentId, setCurrentId] = useState('')

  async function handleDelete(id) {
    await deleteProduct(id)
    setIsOpenDelete(false)
    getProducts()
  }

  function handleUpdate() {
    setCurrentId(products[0]._id)
    setIsOpenEdit(false)
  }

  return (
    <Columns>
      {products.map(el => 
        <Columns.Column size={3} key={el._id}>
          <Card>
            <Card.Image src={el.imgUrl} size='4by3' />
            <Card.Content>
              <Content>
                <Heading>{el.name}</Heading>
                <Heading subtitle size={6}>Price: ${Intl.NumberFormat().format(el.unitaryPrice)} COP</Heading>
                <Heading subtitle size={6}>Size: {el.size}</Heading>
                <p>Description: {el.description}</p>

                {/* DETAIL */}
                <Link to={el._id} >
                  <Button>
                    <FaRegEye />
                  </Button>
                </Link>

                {/* UPDATE  */}
                <Button onClick={() => setIsOpenEdit(true)}>
                  <FaRegEdit onClick={() => setCurrentId(el._id)} />
                </Button>
                <Modal show={isOpenEdit} onClose={() => setIsOpenEdit(false)} showClose={false}>
                  <Modal.Card>
                    <Modal.Card.Header>
                      <Modal.Card.Title>
                        Edit Product
                      </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                      <FormEdit currentId={currentId} handleUpdate={handleUpdate} />
                    </Modal.Card.Body>
                  </Modal.Card>
                </Modal>

                {/* DELETE  */}
                <Button onClick={() => handleDelete(el._id)}>
                  <FaTrashAlt />
                </Button>
              </Content>
            </Card.Content>
          </Card>
        </Columns.Column>
      )}
    </Columns>
  )
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProduct: (data) => dispatch(deleteProduct(data)),
    updateProduct: (data) => dispatch(updateProduct(data)),
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)