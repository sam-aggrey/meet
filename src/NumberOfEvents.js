import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   infoText: ''
    // }
  }

  // handleInputChanged = (event) => {
  //   const newCounter = event.target.value;
  //    if (isNaN(newCounter) || newCounter < 1) {
  //     this.setState({
  //       eventCounter: '',
  //       infoText: 'Please write a number',
  //     })
  //   } else {
  //     this.setState({
  //       eventCounter: newCounter,
  //       infoText: ''
  //     });
  //   };
  //   this.props.updateEventNumber(event.target.value);
  //}


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
