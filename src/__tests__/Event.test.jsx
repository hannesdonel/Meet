import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render container', () => {
    expect(EventWrapper.find('div')).toHaveLength(1);
  });
});
