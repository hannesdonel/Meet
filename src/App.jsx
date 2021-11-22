import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import EventCity from './EventCity';

import { checkToken } from './api';
import {
  fetchData, handleShowClick, toTopFunction,
  offlineListener, onlineListener, handleScroll,
} from './services';
import './nprogress.css';
import { ErrorAlert, WarningAlert } from './Alert';

class App extends Component {
  constructor(props) {
    super(props);

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
    const tokenCheck = await checkToken();
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    if (code || tokenCheck.ok) {
      this.setState({ showWelcomeScreen: !(code || tokenCheck.ok) });
      this.fetchApi();
    }
    // If your testing locally you'll receive mocData even without a token
    if (window.location.href.startsWith('http://localhost')) {
      this.fetchApi();
    }
    offlineListener();
    onlineListener();
    window.addEventListener('scroll', handleScroll);
  }

  // Loads data from API and sets state.
  fetchApi = () => {
    this.setState({ isLoading: true });
    fetchData().then((data) => {
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

  // If any filter is set or the search gets deployed, this function
  // updates the list of events to be displayed.
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
  };

  // Order and filter data to be conveniently
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

  // Sync the count input with the count set externally to components state
  setValue = () => {
    const { count } = this.state;
    const input = document.getElementById('number-of-events__input');
    input.value = count;
  };

  // Restricts the number of events to be displayed
  setEventCount = async (number) => {
    const { currentLocation } = this.state;
    await this.setState({ count: number });
    this.updateEvents(currentLocation);
  };

  setCurrentLocation = (location) => {
    this.setState({ currentLocation: location });
  }

  handleChartClick = (event) => {
    const { value } = event;
    document.getElementsByClassName('city-search__input')[0].value = value;
    this.updateEvents(value);
  };

  render() {
    const {
      events, currentLocation, locations, showMore, count,
      isLoading, showWarningAlert, warningText, showWelcomeScreen,
    } = this.state;

    if (isLoading) {
      return (
        <div className="loader-container">
          <p>loading...</p>

          {/* Alert section */}

          <div id="alert-wrapper">
            <div
              id="offline-alert"
              className={!navigator.onLine ? '' : 'display-none'}
            >
              <ErrorAlert text="It seems you're offline." color="#ffffff" />
            </div>

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

        {/* Search bar */}

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

        <div id="spaceholder" />

        {/* Content */}

        <div id="content">

          {/* Chart section */}

          <div
            id="chart-wrapper"
          >
            <div id="genre-chart-wrapper">
              <EventGenre updateEvents={this.updateEvents} events={events} />
            </div>
            <div id="city-chart-wrapper">
              <EventCity
                setCurrentLocation={this.setCurrentLocation}
                setEventCount={this.setEventCount}
                handleChartClick={this.handleChartClick}
                getData={this.getData}
              />
            </div>
          </div>
          <div id="chart-controls">
            <label htmlFor="hide-chart">
              <input id="hide-chart" type="checkbox" onClick={() => handleShowClick()} />
              Show chart
            </label>
          </div>

          {/* Event list */}

          <EventList
            events={events}
            showMore={showMore}
            setEventCount={this.setEventCount}
            count={count}
            showWarningAlert={showWarningAlert}
            warningText={warningText}
            updateEvents={this.updateEvents}
          />
        </div>

        {/* Alert section */}

        <div id="alert-wrapper">
          <div
            id="warning-alert"
            role="button"
            tabIndex={0}
            onClick={async () => { await this.setState({ currentLocation: '' }); this.setEventCount(0); }}
            onKeyDown={async () => { await this.setState({ currentLocation: '' }); this.setEventCount(0); }}
            className={currentLocation === '' && count === 0 ? 'display-none' : 'fadeIn'}
          >
            <WarningAlert text="Reset filter" color="#ffffff" />
          </div>
          <div
            id="offline-alert"
            className={!navigator.onLine ? '' : 'display-none'}
          >
            <ErrorAlert text="It seems you're offline." color="#ffffff" />
          </div>
        </div>

        {/* To Top button */}

        <button
          onClick={() => toTopFunction()}
          type="button"
          id="toTop"
          title="Go to top"
        >
          &#8593;
        </button>

      </div>
    );
  }
}

export default App;
