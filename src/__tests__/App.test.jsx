import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  afterAll(() => {
    AppWrapper.unmount();
  });

  test('render App correctly', () => {
    const tree = renderer.create(<App />).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('setEventCount sets "count" state correctly', () => {
    const number = 20;
    AppWrapper.instance().setEventCount(number);
    expect(AppWrapper.state('count')).toEqual(number);
  });
});

describe('<App /> integration', () => {
  let AppWrapper;
  beforeEach(async () => {
    AppWrapper = await mount(<App />);
    await AppWrapper.instance().componentDidMount();
    AppWrapper.update();
  });

  afterEach(() => {
    AppWrapper.unmount();
  });

  test('App passes "events" state as a prop to EventList', async () => {
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  });

  test('get list of events matching the city selected by the user', async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const allEvents = AppWrapper.state('allEvents');
    const locations = AppWrapper.state('locations');
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    const eventsToShow = allEvents.filter((event) => event.location === selectedCity);
    await CitySearchWrapper.instance().handleSuggestionClick(selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const allEvents = AppWrapper.state('allEvents');
    const suggestionItems = AppWrapper.find(CitySearch).find('.city-search__suggestions button');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    expect(AppWrapper.state('events')).toEqual(allEvents);
  });

  test('NumberOfEvents sets number of events to be displayed correctly', async () => {
    const NumberOfEventesWrapper = AppWrapper.find(NumberOfEvents);
    await NumberOfEventesWrapper.find('.number-of-events__input').simulate('change', { target: { value: 1 } });
    const countState = AppWrapper.state('count');
    const eventsState = AppWrapper.state('events');
    expect(eventsState.length).toEqual(countState);
  });

  test('show all events when NumberOfEvents is set to "0"', async () => {
    const allEvents = AppWrapper.state('allEvents');
    const NumberOfEventesWrapper = AppWrapper.find(NumberOfEvents);
    await NumberOfEventesWrapper.find('.number-of-events__input').simulate('change', { target: { value: '0' } });
    const manipulatedEvents = AppWrapper.state('events');
    expect(JSON.stringify(manipulatedEvents)).toMatch(JSON.stringify(allEvents));
  });
});
