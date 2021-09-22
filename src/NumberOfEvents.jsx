import React, { Component } from 'react';

class NumberOfEvents extends Component {
  handleInputChange = (count) => {
    const { setEventCount } = this.props;
    setEventCount(count);
  }

  render() {
    return (
      <div className="number-of-events">
        <label htmlFor="number-of-events__input">
          <select
            id="number-of-events__input"
            name="number-of-events__input"
            className="number-of-events__input"
            defaultValue="32"
            onChange={(e) => this.handleInputChange(e.target.value)}
          >
            <option className="number-of-events__option" value="1">1</option>
            <option className="number-of-events__option" value="2">2</option>
            <option className="number-of-events__option" value="4">4</option>
            <option className="number-of-events__option" value="8">8</option>
            <option className="number-of-events__option" value="12">12</option>
            <option className="number-of-events__option" value="16">16</option>
            <option className="number-of-events__option" value="20">20</option>
            <option className="number-of-events__option" value="24">24</option>
            <option className="number-of-events__option" value="28">28</option>
            <option className="number-of-events__option" value="32">32</option>
            <option className="number-of-events__option" value="0">all</option>
          </select>
        </label>
      </div>
    );
  }
}

export default NumberOfEvents;
