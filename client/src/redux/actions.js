import axios from 'axios'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const POST_PRODUCT = 'POST_PRODUCT'
const baseUrl = 'http://localhost:3001/v1'

export function getProducts() {
  return async function(dispatch) {
    try {
      const products = await axios.get(`${baseUrl}/products`)
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data
      })
    } catch (error) {console.log(error)}
  }
}

export function postProduct(payload) {
  return async function(dispatch) {
    try {
      const formData = new FormData()
      formData.append('name', payload.name)
      formData.append('size', payload.size)
      formData.append('unitaryPrice', payload.unitaryPrice)
      formData.append('description', payload.description)
      formData.append('image', payload.image)
      await axios.post(`${baseUrl}/products`, formData)
      dispatch({
        type: POST_PRODUCT,
        payload: formData
      })
    } catch (error) {console.log(error)}
  }
}