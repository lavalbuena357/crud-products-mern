import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import ProductLayout from './Products/components/ProductLayout'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductLayout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
