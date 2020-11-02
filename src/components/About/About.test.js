
import React from 'react'
import About from './About'
import ReactDOM from 'react-dom'

describe(`About component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section')

      ReactDOM.render(<About />, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})