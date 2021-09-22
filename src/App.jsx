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
      events: [],
      locations: [],
      currentLocation: '',
      count: 32,
    };
  }

  componentDidMount() {
    this.mounted = true;
    const { count } = this.state;
    getEvents().then((events) => {
      if (this.mounted) {
        events.slice(0, count);
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  setEventCount = (number) => {
    const { currentLocation } = this.state;
    this.setState({ count: number });
    this.updateEvents(currentLocation);
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const { count } = this.state;
      const locationEvents = (location === '') ? events : events.filter((event) => event.location === location);
      if (count === '0') {
        this.setState({
          currentLocation: location,
          events: locationEvents,
        });
      } else if (count !== 0) {
        const locationEventsShortened = locationEvents.slice(0, count);
        this.setState({
          currentLocation: location,
          events: locationEventsShortened,
        });
      }
    });
  }

  render() {
    const { events, locations } = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents setEventCount={this.setEventCount} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
