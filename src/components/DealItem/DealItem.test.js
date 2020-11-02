import React from 'react'
import DealItem from './DealItem'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe(`DealItem component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section')

      ReactDOM.render(<BrowserRouter><DealItem /></BrowserRouter>, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})