import React from 'react'
import WeekForm from './WeekForm'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

describe(`WeekForm component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section')

      ReactDOM.render(<BrowserRouter><WeekForm /></BrowserRouter>, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})