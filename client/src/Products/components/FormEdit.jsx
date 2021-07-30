import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bulma-components'
import { updateProduct, getProducts } from '../../redux/actions'

const { Field, Control, Label, Input } = Form

function FormEdit({ products, updateProduct, currentId, _handleSubmit, getProducts }) {
  const update = products.filter(el => el._id === currentId)
  const [formNewValues, setFormNewValues] = useState({
    name: update[0].name,
    size: update[0].size || '',
    unitaryPrice: update[0].unitaryPrice || '',
    description: update[0].description,
    imgUrl: update[0].imgUrl
  })

  function handleChange(e) {
    const { name, value } = e.target 
    setFormNewValues({...formNewValues, [name]: value})
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await updateProduct(currentId, {...formNewValues})
    getProducts()
    _handleSubmit()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <Label>Image</Label>
        <Control>
          <img src={formNewValues.imgUrl} width='200px' />
          <Input 
            placeholder='Enter url image..' 
            name='imgUrl'
            value={formNewValues.imgUrl}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input 
            placeholder='Enter new name...'
            name='name'
            value={formNewValues.name}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Price Unitary</Label>
        <Control>
          <Input 
            placeholder='Enter new price...'
            type='number'
            name='unitaryPrice'
            value={formNewValues.unitaryPrice}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Amount</Label>
        <Control>
          <Input 
            placeholder='Enter new amount...'
            type='number'
            name='size'
            value={formNewValues.size}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Description</Label>
        <Control>
          <Input 
            placeholder='Enter new description...'
            name='description'
            value={formNewValues.description}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Button type='submit' color='primary'>Update</Button>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (id, data) => dispatch(updateProduct(id, data)),
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit)