import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import {extractLocations } from './api';

class App extends Component {
  constructor(props) {
  super(props)

  this.state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  }
}
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
