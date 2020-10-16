import React from 'react';
import Nav from './Nav'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe(`Nav component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section');

      ReactDOM.render(<BrowserRouter><Nav /></BrowserRouter>, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})