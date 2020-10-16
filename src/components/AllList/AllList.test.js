import React from 'react';
import AllList from './AllList'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe(`AllList component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section');

      ReactDOM.render(<BrowserRouter><AllList /></BrowserRouter>, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})