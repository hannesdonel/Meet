import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      turn: false,
    };
  }

  toggleShow = () => {
    const { show, turn } = this.state;
    this.setState({ turn: !turn });
    this.setState({ show: !show });
  }

  render() {
    const { event } = this.props;
    const { show, turn } = this.state;

    return (
      <div className="event">
        <button type="button" className="event__window" onClick={() => this.toggleShow()}>
          <ul>
            <li className="event__summary">{event.summary}</li>
            <li className="event__location">{event.location}</li>
            <li className="event__date">
              <p>
                Date:
                {' '}
                {event.start.dateTime.slice(0, 10)}
              </p>
              <p>
                Time:
                {' '}
                {event.start.dateTime.slice(11, 16)}
                {' '}
                {event.start.timeZone}
                {' '}
                {event.start.dateTime.slice(19, 26)}
              </p>
            </li>
            {show === true && (
            <p className="event__details">{event.description}</p>
            )}
            <span
              className={`material-icons event__show-more-button ${turn ? '' : 'turn'}`}
              onClick={() => this.toggleShow()}
              onKeyDown={() => this.toggleShow()}
              role="button"
              tabIndex={0}
            >
              keyboard_double_arrow_down
            </span>
          </ul>
        </button>
      </div>
    );
  }
}

export default Event;
