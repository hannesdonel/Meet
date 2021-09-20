import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

const App = () => (
  <div className="App">
    <CitySearch />
    <NumberOfEvents />
    <EventList />
  </div>
);

export default App;
