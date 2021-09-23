import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { extractLocations } from '../api';
import App from '../App';
import CitySearch from '../CitySearch';
import mockData from '../mock-data';

const feature = loadFeature('./src/features/filterEventsByCity.feature');
const locations = extractLocations(mockData);

defineFeature(feature, (test) => {
  test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
    given('user hasn’t searched for any city', () => {

    });

    let AppWrapper;
    when('the user opens the app', async () => {
      AppWrapper = await mount(<App />);
    });

    then('the user will see a list of all upcoming events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });

  test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    let CitySearchWrapper;
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
    });

    when('user starts typing in the city textbox', () => {
      CitySearchWrapper.find('.city-search__input').simulate('change', { target: { value: 'Berlin' } });
    });

    then('the user will see a list of cities as suggestions that match what they’ve typed', () => {
      expect(CitySearchWrapper.find('.city-search__button')).toHaveLength(1);
    });
  });

  test('User can select a city from the suggested list.', ({
    given, and, when, then,
  }) => {
    let AppWrapper;
    given('the user was typing “Berlin” in the city textbox', async () => {
      AppWrapper = await mount(<App />);
      await AppWrapper.instance().componentDidMount();
      AppWrapper.update();
      AppWrapper.find('.city-search__input').simulate('change', { target: { value: 'Berlin' } });
    });

    and('the list of suggested cities is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.city-search__button')).toHaveLength(1);
    });

    when('the user selects a city from the list', () => {
      AppWrapper.find('.city-search__button').at(0).simulate('click');
    });

    then('their city will change to that city', () => {
      expect(AppWrapper.state('currentLocation')).toBe('Berlin, Germany');
    });

    and('the user will receive a list of upcoming events in that city', () => {
      AppWrapper.update();
      const events = AppWrapper.find('.event__location');
      events.forEach((event) => {
        expect(event.text()).toEqual('Berlin, Germany');
      });
    });
  });
});
