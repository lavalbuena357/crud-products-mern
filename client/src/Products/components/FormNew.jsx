import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form as BulmaForm, Button } from 'react-bulma-components'
import { getProducts, postProduct } from '../../redux/actions'

const { Field, Control, Label, Input } = BulmaForm

function FormNew({ postProduct, getProducts, handleAdd }) {
  const [formValues, setFormValues] = useState({
    name: '',
    size: '',
    unitaryPrice: '',
    description: '',
    imgUrl: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await postProduct({...formValues})
    getProducts()
    handleAdd()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input 
            placeholder='Enter name...' 
            name='name'
            value={formValues.name}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Price Unitary</Label>
        <Control>
          <Input 
            placeholder='Enter price unitary...' 
            type='number'
            name='unitaryPrice'
            value={formValues.unitaryPrice}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Amount</Label>
        <Control>
          <Input 
            placeholder='Enter amount...' 
            type='number'
            name='size'
            value={formValues.size}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Description</Label>
        <Control>
          <Input 
            placeholder='Enter description..' 
            name='description'
            value={formValues.description}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>Image</Label>
        <Control>
          <Input 
            placeholder='Enter url image..' 
            name='imgUrl'
            value={formValues.imgUrl}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Button type='submit' color='primary'>Save</Button>
    </form>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    postProduct: (payload) => dispatch(postProduct(payload)),
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(null, mapDispatchToProps)(FormNew)