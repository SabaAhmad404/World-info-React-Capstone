import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Home from '../components/homepage';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({
  countries: [],
  continent: 'Asia',
  isLoading: false,
  error: null,
});

describe('Home component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
