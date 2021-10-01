import React, { Component } from 'react';
import {
  ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, ResponsiveContainer,
} from 'recharts';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';

import {
  extractLocations, getEvents, checkToken,
} from './api';
import './nprogress.css';
import { ErrorAlert, WarningAlert } from './Alert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allEvents: [],
      events: [],
      locations: [],
      currentLocation: '',
      count: 0,
      isLoading: true,
      showMore: false,
      warningText: '',
      showWarningAlert: false,
      showWelcomeScreen: undefined,
    };
  }

  async componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
    const { error } = await checkToken(accessToken);
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    if (!window.location.href.startsWith('http://localhost')) {
      this.setState({ showWelcomeScreen: !(code || error !== 'invalid_token'), isLoading: false });
    }
    if (window.location.href.startsWith('http://localhost')) {
      this.setState({ isLoading: true });
      this.fetchData().then((data) => {
        this.setState({
          allEvents: data.events,
          events: data.events,
          locations: data.locations,
          isLoading: false,
        });
        if (data.events.length > 99999999) {
          this.setState({
            showMore: true,
          });
        }
      });
    }
    if (code || error !== 'invalid_token') {
      this.setState({ isLoading: true });
      this.fetchData().then((data) => {
        this.setState({
          allEvents: data.events,
          events: data.events,
          locations: data.locations,
          isLoading: false,
        });
        if (data.events.length > 99999999) {
          this.setState({
            showMore: true,
          });
        }
      });
    }
    window.addEventListener('offline', () => {
      document.getElementById('offline-alert').style.opacity = 1;
    });
    window.addEventListener('online', () => {
      document.getElementById('offline-alert').style.opacity = 0;
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

  updateEvents = (location, genre) => {
    const { count, allEvents } = this.state;
    let filteredEvents;
    if (location !== undefined) {
      filteredEvents = (location === '') ? allEvents : allEvents.filter((event) => event.location.includes(location));
    } else {
      filteredEvents = allEvents.filter(({ summary }) => summary.split(' ').toString().includes(genre));
    }

    if (count.toString() === '0') {
      this.setValue();
      this.setState({
        currentLocation: location,
        events: filteredEvents,
        showMore: false,
        showWarningAlert: false,
      });
    } else if (count.toString() !== '0') {
      const filteredEventsShortened = filteredEvents.slice(0, count);
      this.setValue();
      if (filteredEventsShortened.length === filteredEvents.length) {
        this.setState({
          currentLocation: location,
          events: filteredEventsShortened,
          showMore: false,
          showWarningAlert: false,
        });
      } else {
        this.setState({
          currentLocation: location,
          events: filteredEventsShortened,
          showMore: true,
          showWarningAlert: false,
        });
      }
      if (filteredEvents.length < parseInt(count, 10)) {
        this.setState({
          warningText: 'Your request did not produce any more results.',
          showWarningAlert: true,
        });
      }
    }
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      if (location.includes('Dubai')) {
        const city = location.split('- ').shift();
        return { city, number };
      }
      if (location.includes('Sydney')) {
        const city = location.split('NSW').shift();
        return { city, number };
      }
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  toggleLoadingScreen = (boolean) => {
    this.setState({
      isLoading: boolean,
    });
  }

  handleChartClick = (event) => {
    const { value } = event;
    document.getElementsByClassName('city-search__input')[0].value = value;
    this.updateEvents(value);
  }

  handleShowClick = () => {
    const chart = document.getElementById('chart-wrapper');
    const { checked } = document.getElementById('hide-chart');
    if (!checked) {
      chart.classList.add('display-none');
    } else {
      chart.classList.remove('display-none');
    }
  }

  render() {
    const {
      events, currentLocation, locations, showMore, count,
      isLoading, showWarningAlert, warningText, showWelcomeScreen,
    } = this.state;

    if (isLoading) {
      return (
        <div className="loader-container">
          <p>loading...</p>
          <div
            className={!navigator.onLine ? 'offline-alert' : 'offline-alert display-none'}
          >
            <ErrorAlert text="It seems you're offline." color="#ffffff" />
          </div>
        </div>
      );
    }

    if (showWelcomeScreen) {
      return (
        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          isLoading={this.toggleLoadingScreen}
        />
      );
    }

    return (
      <div className="App">
        <div>
          <div id="search-bar-container">
            <div id="search-bar">
              <CitySearch
                locations={locations}
                updateEvents={this.updateEvents}
                currentLocation={currentLocation}
              />
              <NumberOfEvents setEventCount={this.setEventCount} />
            </div>
          </div>
          <div id="content">
            <div id="chart-wrapper" className="display-none">
              <div id="genre-chart-wrapper">
                <EventGenre updateEvents={this.updateEvents} events={events} />
              </div>
              <div id="city-chart-wrapper">
                <ResponsiveContainer height="100%" width={1500}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" onClick={async () => { await this.setState({ currentLocation: '' }); this.setEventCount(0); }} />
                    <XAxis
                      onClick={(event) => { this.handleChartClick(event); }}
                      dataKey="city"
                      name="City"
                      type="category"
                    />
                    {/* eslint-disable-next-line */}
                <YAxis width={25} dataKey="number" name="Number of events" type="number" allowDecimals={false} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter data={this.getData()} fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div id="chart-controls">
              <label htmlFor="hide-chart">
                <input id="hide-chart" type="checkbox" onClick={() => this.handleShowClick()} />
                Show chart
              </label>
            </div>
            <EventList
              events={events}
              showMore={showMore}
              setEventCount={this.setEventCount}
              count={count}
              showWarningAlert={showWarningAlert}
              warningText={warningText}
              updateEvents={this.updateEvents}
            />
            <div
              id="offline-alert"
            >
              <ErrorAlert text="It seems you're offline." color="#ffffff" />
            </div>
            <div
              id="warning-alert"
              role="button"
              tabIndex={0}
              onClick={async () => { await this.setState({ currentLocation: '' }); this.setEventCount(0); }}
              onKeyDown={async () => { await this.setState({ currentLocation: '' }); this.setEventCount(0); }}
              className={currentLocation === '' && count === 0 ? 'display-none' : ''}
            >
              <WarningAlert text="Reset filter" color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
