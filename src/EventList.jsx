import React from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';

const EventList = ({
  events, showMore, setEventCount, count, showWarningAlert, warningText,
}) => {
  let newCount;
  const handleShowMore = () => {
    switch (count.toString()) {
      case '1':
        newCount = 2;
        break;
      case '2':
        newCount = 4;
        break;
      case '4':
        newCount = 8;
        break;
      case '8':
        newCount = 12;
        break;
      case '12':
        newCount = 16;
        break;
      case '16':
        newCount = 20;
        break;
      case '20':
        newCount = 24;
        break;
      case '24':
        newCount = 28;
        break;
      case '28':
        newCount = 32;
        break;
      case '32':
        newCount = 0;
        break;
      default:
        newCount = 0;
    }
    setEventCount(newCount);
  };

  return (
    <ul className="event-list">
      {events.map((event) => (
        <li className="event-list__item" key={event.id}>
          <Event event={event} />
        </li>
      ))}

      <div
        className={showWarningAlert ? 'event-list__warning' : 'event-list__warning display-none'}
      >
        <WarningAlert
          text={warningText}
        />
      </div>

      {showMore === true && (
        <div
          className="show-more-events"
          onClick={() => handleShowMore()}
          onKeyDown={() => handleShowMore()}
          role="button"
          tabIndex={0}
        >
          <p>show more</p>
          <span
            className="material-icons"
          >
            keyboard_double_arrow_down
          </span>
        </div>
      )}
    </ul>
  );
};

export default EventList;
