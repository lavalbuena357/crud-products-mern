import React from 'react'
import { InputText, FormCtn, Label, SubmitBtn, TextArea } from '../styles/Styles'

function Form() {

  async function handleSubmit(e) {
    e.preventDefault(e)
    console.log('submit')
  } 

  return (
    <FormCtn onSubmit={handleSubmit}>
      <Label>Image: </Label>
      <InputText type="text" placeholder='Enter url image...' />
      <Label>Name: </Label>
      <InputText type="text" placeholder='Enter name...' />
      <Label>Unit Price: </Label>
      <InputText type="number" placeholder='Enter price...' />
      <Label>Amount: </Label>
      <InputText type="number" placeholder='Enter amount...' />
      <Label>Description: </Label>
      <TextArea name="" id="" cols="30" rows="10" placeholder='Enter description...'></TextArea>
      <SubmitBtn type="submit" value="Save" />
    </FormCtn>
  )
}

export default Form