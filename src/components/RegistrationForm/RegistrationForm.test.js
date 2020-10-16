import React from 'react';
import RegistrationForm from './RegistrationForm'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe(`RegistrationForm component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section');

      ReactDOM.render(<RegistrationForm />, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})