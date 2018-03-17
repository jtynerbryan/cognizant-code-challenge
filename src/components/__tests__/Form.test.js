import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../Form';

describe('<Form/>', () => {
  it('renders without crashing', () => {
    shallow(<Form />);
  })

  it('renders user instructions', () => {
    const wrapper = shallow(<Form />);
    const instructions = <h2>Please enter at least 4 cities to find weather data for</h2>
    expect(wrapper.contains(instructions)).toEqual(true);
  });

  it('renders without changing unexpectedly', () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
