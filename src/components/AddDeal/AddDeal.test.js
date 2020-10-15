import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddDeal from './AddDeal'

describe(`AddDeal component`, () => {
  
    it('renders the complete form', () => {
      const wrapper = shallow(<AddDeal />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
})