import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import axios from 'axios';
 
jest.mock('axios');
 
describe('Home component', () => {
    it('should fetch a list of donations', () => {
      //given  
      const getSpy = jest.spyOn(axios, 'get');
      const wrapper = shallow( <Home/> );

      //then
      expect(getSpy).toBeCalled();
    });
});