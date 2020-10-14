import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import DealItem from './DealItem'

describe(`DealItem component`, () => {
  
    it('renders the complete form', () => {
      const wrapper = shallow(<DealItem />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
})