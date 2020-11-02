import React from 'react'
import LoginForm from './LoginForm'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe(`LoginForm component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section')

      ReactDOM.render(<BrowserRouter><LoginForm /></BrowserRouter>, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})