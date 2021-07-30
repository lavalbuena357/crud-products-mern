import { GET_PRODUCTS, UPDATE_PRODUCT } from "./actions";

const initialState = {
  products: []
}


function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_PRODUCTS:
      return {...state,
        products: action.payload
      }
    case UPDATE_PRODUCT:
      return {...state,
        products: state.products
      }
    default:
      return state
  }
} 

export default reducer