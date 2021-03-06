import React from 'react'
import DealItemExpanded from './DealItemExpanded'
import ReactDOM from 'react-dom'
import ApiContext from '../../contexts/ApiContext'


describe(`DealItemExpanded component`, () => {
  
    it('renders without crashing', () => {
      const section = document.createElement('section')

      const deals = [
        {
          "id": 1,
          "name": "Important", 
          "content": "content 1", 
          "price": 3, 
          "day": "Monday", 
          "distance": 4
        },
        {
          "id": 2,
          "name": "Important 2", 
          "content": "content 2", 
          "price": 4, 
          "day": "Tuesday", 
          "distance": 17
        },
        {
          "id": 3,
          "name": "Important 3", 
          "content": "content 3", 
          "price": 1, 
          "day": "Wednesday", 
          "distance": 8
        }
      ]

     
      ReactDOM.render(<ApiContext.Provider value={{deals}}><DealItemExpanded match={{params:{dealId:deals[0].id}}}/></ApiContext.Provider>, section)

      ReactDOM.unmountComponentAtNode(section)
    })

    
  
})