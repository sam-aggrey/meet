import React, { Component } from 'react';
import './nprogress.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from "./api";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      currentLocation: 'all',
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }


   updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);

      const eventsToShow = locationEvents.slice(0, numberOfEvents);
      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          currentLocation: location
        });
      }
    });
  };


  updateEventNumber = async (event) => {
    const eventCount = event.target.value ? parseInt(event.target.value) : 32;
    await this.setState({ numberOfEvents: eventCount });
    this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
  }


  render() {

    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events}/>
        <NumberOfEvents eventCounter={this.state.numberOfEvents} updateEventNumber={(event) => this.updateEventNumber(event)} />
      </div>
    );
  }
}

export default App;
