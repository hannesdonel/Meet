import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import mockData from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  afterAll(() => {
    EventWrapper.unmount();
  });

  test('render container', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('toggle show correctly', () => {
    EventWrapper.setState({ show: false });
    EventWrapper.instance().toggleShow();
    expect(EventWrapper.state('show')).toBe(true);
    EventWrapper.instance().toggleShow();
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('change state on show more and show less button', () => {
    EventWrapper.setState({ show: false });
    const showMoreButton = EventWrapper.find('.event__show-more-button');
    showMoreButton.simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
    showMoreButton.simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
    showMoreButton.simulate('keyDown');
    expect(EventWrapper.state('show')).toBe(true);
    showMoreButton.simulate('keyDown');
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('change state on Event window click', () => {
    EventWrapper.setState({ show: false });
    const showMoreButton = EventWrapper.find('.event__window');
    showMoreButton.simulate('click');
    expect(EventWrapper.state('show')).toBe(true);

    showMoreButton.simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });
});
