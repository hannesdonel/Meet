import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import mockData from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
  let locations;
  let CitySearchWrapper;
  beforeAll(() => {
    locations = extractLocations(mockData);
    CitySearchWrapper = shallow(<CitySearch locations={locations} updateEvents={() => {}} />);
  });

  afterAll(() => {
    CitySearchWrapper.unmount();
  });

  test('render search input', () => {
    expect(CitySearchWrapper.find('.city-search__input')).toHaveLength(1);
  });

  test('render a list of suggestions', () => {
    expect(CitySearchWrapper.find('.city-search__suggestions')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city-search__input').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    CitySearchWrapper.setState({
      query: 'Munich',
    });
    const city = 'Hamburg';
    const eventObject = { target: { value: city } };
    CitySearchWrapper.find('.city-search__input').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe(city);
    const empty = '';
    const eventObjectEmpty = { target: { value: empty } };
    CitySearchWrapper.find('.city-search__input').simulate('change', eventObjectEmpty);
    expect(CitySearchWrapper.state('query')).toBe(empty);
  });

  test('render list of suggestions correctly', () => {
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.city-search__suggestions li')).toHaveLength(suggestions.length + 2);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.city-search__suggestions li').at(i + 1).text()).toBe(suggestions[i]);
    }
  });

  test('suggestion list match the query when changed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find('.city-search__input').simulate('change', {
      target: { value: 'Berlin' },
    });
    const query = CitySearchWrapper.state('query');
    const filteredLocations = locations
      .filter((location) => location.toUpperCase().indexOf(query.toUpperCase()) > -1);
    expect(CitySearchWrapper.state('suggestions')).toEqual(filteredLocations);
  });

  test('selecting a suggestion should change query state', () => {
    CitySearchWrapper.find('.city-search__input').simulate('change', { target: { value: 'Berlin' } });
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.city-search__button').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);

    CitySearchWrapper.find('.city-search__input').simulate('change', { target: { value: 'Berlin' } });
    CitySearchWrapper.find('.city-search__button').at(0).simulate('keyDown');
    expect(CitySearchWrapper.state('query')).toBe(suggestions[0]);
  });

  test('selecting "show all" should change query state', () => {
    CitySearchWrapper.setState({ query: '' });
    CitySearchWrapper.find('.city-search__all-button').at(0).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe('');

    CitySearchWrapper.setState({ query: '' });
    CitySearchWrapper.find('.city-search__all-button').at(0).simulate('keyDown');
    expect(CitySearchWrapper.state('query')).toBe('');
  });

  test('selecting CitySearch input reveals the suggestions list', () => {
    CitySearchWrapper.find('.city-search__input').simulate('focus');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(true);
    expect(CitySearchWrapper.find('.city-search__suggestions').prop('style')).not.toEqual({ opacity: 0, visibility: 'hidden' });
    CitySearchWrapper.find('.city-search__input').simulate('blur');
    setTimeout(() => expect(CitySearchWrapper.state('showSuggestions')).toBe(false), 15);
    expect(Object.keys(CitySearchWrapper.find('.city-search__suggestions'))).toHaveLength(0);
  });

  test('selecting a suggestion should hide the suggestions list', () => {
    CitySearchWrapper.setState({
      query: 'Berlin',
      showSuggestions: undefined,
    });
    CitySearchWrapper.find('.city-search__suggestions button').at(0).simulate('click');
    expect(CitySearchWrapper.state('showSuggestions')).toBe(false);
    expect(CitySearchWrapper.find('.city-search__suggestions').prop('style')).toEqual({ opacity: 0, visibility: 'hidden' });
  });
});
