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
    };
  }

  componentDidMount() {
    this.fetchData().then((data) => {
      this.setState({
        allEvents: data.events,
        events: data.events,
        locations: data.locations,
        isLoading: false,
      });
    });
  }

  fetchData = async () => {
    const events = await getEvents();
    const locations = extractLocations(events);
    return { events, locations };
  };

  setEventCount = async (number) => {
    const { currentLocation } = this.state;
    await this.setState({ count: number });
    this.updateEvents(currentLocation);
  }

  updateEvents = (location) => {
    const { count, allEvents } = this.state;
    const locationEvents = (location === '') ? allEvents : allEvents.filter((event) => event.location === location);
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
  }

  render() {
    const { events, locations, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="loader-container"><p>loading...</p></div>
      );
    }

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
