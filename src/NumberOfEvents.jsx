import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      numberOfEvents: 32,
    };
  }

    handleInputChange = (value) => {
      this.setState({
        numberOfEvents: value,
      });
    }

    render() {
      const { numberOfEvents } = this.state;

      return (
        <input
          className="number-of-events__input"
          value={numberOfEvents}
          min="1"
          onChange={(e) => this.handleInputChange(e.target.value)}
        />
      );
    }
}

export default NumberOfEvents;
