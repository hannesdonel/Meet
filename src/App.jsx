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
    };
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === '') ? events : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  }

  render() {
    const { events, locations } = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
