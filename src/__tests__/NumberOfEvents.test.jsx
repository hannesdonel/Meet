import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> Component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render number input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events__input')).toHaveLength(1);
  });

  test('display correct initial value', () => {
    const initialValue = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.number-of-events__input').prop('value')).toBe(initialValue);
  });

  test('change state on change', () => {
    const newNumber = 20;
    const eventObject = { target: { value: newNumber } };
    NumberOfEventsWrapper.find('.number-of-events__input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(newNumber);
  });
});
