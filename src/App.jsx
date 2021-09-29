import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';

import {
  extractLocations, getEvents, checkToken, getAccessToken,
} from './api';
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
      warningText: '',
      showWarningAlert: false,
      showWelcomeScreen: true,
    };
  }

  async componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
    console.log(!!(await checkToken(accessToken).error));
    const isTokenValid = !!(await checkToken(accessToken).error);
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    console.log('code', code);
    console.log(!(code || isTokenValid));
    this.setState({ showWelcomeScreen: !(code || isTokenValid), isLoading: false });
    if (code || isTokenValid) {
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
        showWarningAlert: false,
      });
    } else if (count.toString() !== '0') {
      const locationEventsShortened = locationEvents.slice(0, count);
      this.setValue();
      if (locationEventsShortened.length === locationEvents.length) {
        this.setState({
          currentLocation: location,
          events: locationEventsShortened,
          showMore: false,
          showWarningAlert: false,
        });
      } else {
        this.setState({
          currentLocation: location,
          events: locationEventsShortened,
          showMore: true,
          showWarningAlert: false,
        });
      }
      if (locationEvents.length < parseInt(count, 10)) {
        this.setState({
          warningText: 'Your request did not produce any more results.',
          showWarningAlert: true,
        });
      }
    }
  }

  render() {
    const {
      events, locations, isLoading, showMore,
      count, showWarningAlert, warningText, showWelcomeScreen,
    } = this.state;

    if (isLoading) {
      return (
        <div className="loader-container"><p>loading...</p></div>
      );
    }

    return (
      <div className="App">
        <div id="search-bar-container">
          <div id="search-bar">
            <CitySearch locations={locations} updateEvents={this.updateEvents} />
            <NumberOfEvents setEventCount={this.setEventCount} />
          </div>
        </div>
        <div id="content">
          <EventList
            events={events}
            showMore={showMore}
            setEventCount={this.setEventCount}
            count={count}
            showWarningAlert={showWarningAlert}
            warningText={warningText}
          />
        </div>
        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => { getAccessToken(); }}
        />
      </div>
    );
  }
}

export default App;
