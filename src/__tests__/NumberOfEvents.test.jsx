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

  test('set state correctly on handleInputChange function', () => {
    const newNumber = 23;
    NumberOfEventsWrapper.instance().handleInputChange(newNumber);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(newNumber);
  });

  test('change state on change', () => {
    const newNumber = 12;
    const eventObject = { target: { value: newNumber } };
    NumberOfEventsWrapper.find('.number-of-events__input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(newNumber);
  });
});
