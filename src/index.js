import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './app/store'

import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
  box-sizing:inherit
}  
body {
    margin:0;
    padding:0;
    box-sizing:border-box;
  background-color: #FDFFFC;
  color:#011627;
  font-family:Arial, Helvetica, sans-serif

  }
`

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root'),
)
