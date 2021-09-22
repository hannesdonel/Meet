import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggleShow = () => {
    const { show } = this.state;

    return (this.setState({ show: !show }));
  }

  render() {
    const { event } = this.props;
    const { show } = this.state;

    return (
      <div className="event">
        <ul>
          <li className="event__summary">{event.summary}</li>
          <li className="event__location">{event.location}</li>
          <li className="event__date">
            Start:
            {event.start.dateTime}
            {' '}
            - Time Zone:
            {event.start.timeZone}
          </li>
          {show === true && (
          <p className="event__details">{event.description}</p>
          )}
          {show === false && (
          <button
            type="button"
            className="event__show-more-button"
            onClick={() => this.toggleShow()}
          >
            Show details
          </button>
          )}
          {show === true && (
          <button
            type="button"
            className="event__show-less-button"
            onClick={() => this.toggleShow()}
          >
            Hide details
          </button>
          )}
        </ul>
      </div>
    );
  }
}

export default Event;
