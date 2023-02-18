import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../components/Nav';

describe('Navbar', () => {
  it('requires the year prop to be a number', () => {
    expect(() => {
      shallow(<Navbar head="Test" year="2022" />);
    }).toThrow();
  });
});
