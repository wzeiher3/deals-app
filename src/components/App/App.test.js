import React from 'react';
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe(`App component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section');

      ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})