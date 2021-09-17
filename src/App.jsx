import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';

const App = () => (
  <div className="App">
    <CitySearch />
    <EventList />
  </div>
);

export default App;
