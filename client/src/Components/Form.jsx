import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { InputText, FormCtn, Label, SubmitBtn, TextArea } from '../styles/Styles'

function Form(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    await dispatch(props.function(props.product, props.id))
    navigate(props.route)
  } 

  function handleChange(e) {
    const {name, value} =e.target
    props.setProduct({...props.product, [name]: value})
  }

  return (
    <FormCtn onSubmit={handleSubmit}>
      <Label>Image: </Label>
      <InputText type="text" placeholder='Enter url image...' name='imgUrl' onChange={handleChange} value={props.product.imgUrl} />
      <Label>*Name: </Label>
      <InputText type="text" placeholder='Enter name...' required name='name' onChange={handleChange} value={props.product.name} />
      <Label>*Unit Price: </Label>
      <InputText type="number" placeholder='Enter price...' required name='unitaryPrice' onChange={handleChange} value={props.product.unitaryPrice} />
      <Label>*Amount: </Label>
      <InputText type="number" placeholder='Enter amount...' required name='size' onChange={handleChange} value={props.product.size} />
      <Label>Description: </Label>
      <TextArea cols="30" rows="5" placeholder='Enter description...' name='description' onChange={handleChange} value={props.product.description}></TextArea>
      <SubmitBtn type="submit" value="Save" />
    </FormCtn>
  )
}

export default Form