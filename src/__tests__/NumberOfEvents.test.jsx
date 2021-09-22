import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  afterAll(() => {
    NumberOfEventsWrapper.unmount();
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events__input')).toHaveLength(1);
  });
});
