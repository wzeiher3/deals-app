import React from 'react'
import RegistrationForm from './RegistrationForm'
import ReactDOM from 'react-dom'

describe(`RegistrationForm component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section')

      ReactDOM.render(<RegistrationForm />, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})