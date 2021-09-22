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
        <select
          id="number-of-events__input"
          name="number-of-events__input"
          className="number-of-events__input"
          defaultValue="32"
          onChange={(e) => this.handleInputChange(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
          <option value="24">24</option>
          <option value="28">28</option>
          <option value="32">{numberOfEvents}</option>
          <option value="all">all</option>
        </select>
      );
    }
}

export default NumberOfEvents;
