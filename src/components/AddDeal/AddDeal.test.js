import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddDeal from './AddDeal'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'

describe(`AddDeal component`, () => {
  
  // const stubDeals = [
  //   {
  //     "id": 1,
  //     "name": "Important", 
  //     "content": "content 1", 
  //     "price": 3, 
  //     "day": "Monday", 
  //     "distance": 4
  //   },
  //   {
  //     "id": 2,
  //     "name": "Important 2", 
  //     "content": "content 2", 
  //     "price": 4, 
  //     "day": "Tuesday", 
  //     "distance": 17
  //   },
  //   {
  //     "id": 3,
  //     "name": "Important 3", 
  //     "content": "content 3", 
  //     "price": 1, 
  //     "day": "Wednesday", 
  //     "distance": 8
  //   }
  // ]
  
  describe(`AddDeal component`, () => {
  
    it('renders without crashing', () => {
      // const wrapper = shallow(<DealItem />)
      // expect(toJson(wrapper)).toMatchSnapshot()

      const section = document.createElement('section');

      ReactDOM.render(<AddDeal />, section)

      ReactDOM.unmountComponentAtNode(section)
    })
  
})
  
})