import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allEvents: [],
      events: [],
      locations: [],
      currentLocation: '',
      count: 32,
      isLoading: true,
      showMore: false,
    };
  }

  componentDidMount() {
    this.fetchData().then((data) => {
      this.setState({
        allEvents: data.events,
        events: data.events.slice(0, 32),
        locations: data.locations,
        isLoading: false,
      });
      if (data.events.length > 32) {
        this.setState({
          showMore: true,
        });
      }
    });
  }

  fetchData = async () => {
    try {
      const events = await getEvents();
      const locations = extractLocations(events);
      return { events, locations };
    } catch (error) {
      return error;
    }
  };

  setEventCount = async (number) => {
    const { currentLocation } = this.state;
    await this.setState({ count: number });
    this.updateEvents(currentLocation);
  }

  setValue = () => {
    const { count } = this.state;
    const input = document.getElementById('number-of-events__input');
    input.value = count;
  }

  updateEvents = (location) => {
    const { count, allEvents } = this.state;
    const locationEvents = (location === '') ? allEvents : allEvents.filter((event) => event.location === location);

    if (count.toString() === '0') {
      this.setValue();
      this.setState({
        currentLocation: location,
        events: locationEvents,
        showMore: false,
      });
    } else if (count.toString() !== '0') {
      const locationEventsShortened = locationEvents.slice(0, count);
      this.setValue();
      if (locationEventsShortened.length === locationEvents.length) {
        this.setState({
          currentLocation: location,
          events: locationEventsShortened,
          showMore: false,
        });
      } else {
        this.setState({
          currentLocation: location,
          events: locationEventsShortened,
          showMore: true,
        });
      }
    }
  }

  render() {
    const {
      events, locations, isLoading, showMore, count,
    } = this.state;

    if (isLoading) {
      return (
        <div className="loader-container"><p>loading...</p></div>
      );
    }

    return (
      <div className="App">
        <div className="search-bar">
          <CitySearch locations={locations} updateEvents={this.updateEvents} />
          <NumberOfEvents setEventCount={this.setEventCount} />
        </div>
        <EventList
          events={events}
          showMore={showMore}
          setEventCount={this.setEventCount}
          count={count}
        />
      </div>
    );
  }
}

export default App;
