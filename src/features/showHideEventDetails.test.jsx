import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import mockData from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let EventListWrapper;
    given('anywhere in the app where a list of events appeared', async () => {
      EventListWrapper = await mount(<EventList events={mockData} />);
    });

    when('the user is looking at that list', () => {

    });

    then('all elements of the corresponding list are going to be collapsed by default', () => {
      expect(EventListWrapper.find('.event__details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventListWrapper;
    given('anywhere in the app where a list of events appeared', async () => {
      EventListWrapper = await mount(<EventList events={mockData} />);
    });

    when('the user clicks on a specific event', () => {
      EventListWrapper.find('.event__show-more-button').at(0).simulate('click');
    });

    then('only that element is going expand to reveal its details', () => {
      expect(EventListWrapper.find('.event__details')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;
    given('an expanded element', async () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
      EventWrapper.setState({ show: true });
      expect(EventWrapper.find('.event__details')).toHaveLength(1);
    });

    when('the user clicks on that expanded element', () => {
      EventWrapper.find('.event__window').simulate('click');
    });

    then('it’s going collapse and hide its details.', () => {
      expect(EventWrapper.find('.event__details')).toHaveLength(0);
    });
  });
});
