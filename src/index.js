import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {ApiContextProvider} from './contexts/ApiContext'
import './index.css'
import App from './components/App/App'


ReactDOM.render(
  <BrowserRouter>
    <ApiContextProvider>
      <App />
    </ApiContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

