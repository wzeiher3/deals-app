import React from 'react';
import HomeForm from './HomeForm'
import ReactDOM from 'react-dom'

describe(`HomeForm component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section')

      ReactDOM.render(<HomeForm />, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})