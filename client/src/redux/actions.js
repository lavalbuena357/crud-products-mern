import axios from 'axios'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT = 'GET_PRODUCT'
export const POST_PRODUCT = 'POST_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
const baseUrl = 'https://serene-brushlands-92800.herokuapp.com/v1'

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

export function getProduct(id) {
  return async function(dispatch) {
    try {
      const detail = await axios.get(`${baseUrl}/products/${id}`)
      dispatch({
        type: GET_PRODUCT,
        payload: detail.data
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