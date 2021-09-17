import PropTypes, { objectOf } from 'prop-types';

export const eventsArray = PropTypes.arrayOf(objectOf({
  _id: PropTypes.number.isRequired,
})).isRequired;
