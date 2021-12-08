import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div className="EventNumberComponent">

      <label htmlFor="numberOfEventsInput"> Number of Events on Page:


      <input
        id="numberOfEventsInput"
        type="number"
        className="numberInput"
        value={this.props.eventCounter}
       />
      </label>



      </div>
    )
  }
}

export default NumberOfEvents;
