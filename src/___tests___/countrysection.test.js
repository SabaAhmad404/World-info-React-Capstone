import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CountrySection from '../components/countrysection';

configure({ adapter: new Adapter() });

describe('Country information', () => {
  it('renders correctly components', () => {
    const wrapper = shallow(
      <CountrySection
        name="Pakistan"
        population="220892331"
        flag="https://flagcdn.com/ke.svg"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly components', () => {
    const wrapper = shallow(
      <CountrySection
        name="India"
        population="1380004385"
        flag="https://flagcdn.com/ke.svg"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
