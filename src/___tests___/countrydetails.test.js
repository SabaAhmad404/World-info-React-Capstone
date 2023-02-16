import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { Provider } from 'react-redux';
import store from '../redux/configstore';
import CountryDetails from '../components/countrydetails';

configure({ adapter: new Adapter() });

describe('Details of country', () => {
  it('renders correctly detaails', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CountryDetails />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
