import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import DealItemExpanded from './DealItemExpanded'

describe(`DealItemExpanded component`, () => {
  
    it('renders the complete form', () => {
      const wrapper = shallow(<DealItemExpanded />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
})