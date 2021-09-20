import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render container', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('toggle show correctly', () => {
    EventWrapper.instance().toggleShow(false);
    expect(EventWrapper.state('show')).toBe(true);
    EventWrapper.instance().toggleShow(true);
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('change state on show more and show less button', () => {
    const showMoreButton = EventWrapper.find('.event__show-more-button');
    showMoreButton.simulate('click');
    expect(EventWrapper.state('show')).toBe(true);

    const showLessButton = EventWrapper.find('.event__show-less-button');
    showLessButton.simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });
});
