import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import React from 'react';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  let AppWrapper;
  beforeAll(async () => {
    AppWrapper = await mount(<App />);
  });

  afterAll(() => {
    AppWrapper.unmount();
  });

  test('When user hasn’t specified a number, "all" is the default number', async ({ given, when, then }) => {
    given('a list of events', () => {
      expect(AppWrapper.find('#event-list').exists()).toEqual(true);
    });

    when('the user hasn’t specified a number', () => {

    });

    then('all events gets displayed', () => {
      expect(AppWrapper.state('count')).toEqual(0);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('a list of events', () => {
      expect(AppWrapper.find('#event-list').exists()).toEqual(true);
    });

    when('the user changes the number of events to be displayed', () => {
      AppWrapper.find('.number-of-events__input').simulate('change', { target: { value: '1' } });
    });

    then('a maximum by that number of events will be shown', async () => {
      await AppWrapper.update();
      expect(AppWrapper.find('.event').length).toEqual(1);
    });
  });
});
