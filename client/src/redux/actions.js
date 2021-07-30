import axios from 'axios'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const POST_PRODUCT = 'POST_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
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
      await axios.post(`${baseUrl}/products`, payload)
      dispatch({
        type: POST_PRODUCT,
        payload: payload
      })
    } catch (error) {console.log(error)}
  }
}

export function updateProduct(id, payload) {
  return async function(dispatch) {
    try {
      await axios.put(`${baseUrl}/products/${id}`, payload)
      dispatch({
        type: UPDATE_PRODUCT,
        payload: payload
      })
    } catch (error) {console.log(error)}
  }
}

export function deleteProduct(id) {
  return async function(dispatch) {
    try {
      await axios.delete(`${baseUrl}/products/${id}`)
      dispatch({
        type: DELETE_PRODUCT
      })
    } catch (error) {console.log(error)}
  }
}