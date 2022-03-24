import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postProduct } from '../redux/actions'
import { InputText, FormCtn, Label, SubmitBtn, TextArea } from '../styles/Styles'

function Form() {
  const [product, setProduct] = useState({
    imgUrl: '',
    name: '',
    unitaryPrice: 0,
    size: 0,
    description: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await dispatch(postProduct(product))
    navigate('/')
  } 

  function handleChange(e) {
    const {name, value} =e.target
    setProduct({...product, [name]: value})
  }

  return (
    <FormCtn onSubmit={handleSubmit}>
      <Label>Image: </Label>
      <InputText type="text" placeholder='Enter url image...' name='imgUrl' onChange={handleChange} />
      <Label>*Name: </Label>
      <InputText type="text" placeholder='Enter name...' required name='name' onChange={handleChange} />
      <Label>*Unit Price: </Label>
      <InputText type="number" placeholder='Enter price...' required name='unitaryPrice' onChange={handleChange} />
      <Label>*Amount: </Label>
      <InputText type="number" placeholder='Enter amount...' required name='size' onChange={handleChange} />
      <Label>Description: </Label>
      <TextArea cols="30" rows="5" placeholder='Enter description...' name='description' onChange={handleChange}></TextArea>
      <SubmitBtn type="submit" value="Save" />
    </FormCtn>
  )
}

export default Form