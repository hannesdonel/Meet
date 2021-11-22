import React, { Component } from 'react';
import { InfoAlert, ErrorAlert } from './Alert';

class CitySearch extends Component {
  constructor(props) {
    super(props);

    const { locations } = this.props;

    this.state = {
      query: '',
      suggestions: locations,
      showSuggestions: undefined,
      infoText: '',
      showInfoAlert: false,
      errorText: '',
      showErrorAlert: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { currentLocation } = this.props;
    if (prevProps.currentLocation !== currentLocation && currentLocation !== undefined) {
      this.handlePropChange(currentLocation);
    }
  }

  // Update all props if one has changed
  handlePropChange = (newLocation) => {
    const { locations } = this.props;
    const suggestionsToSet = locations
      .filter((location) => location.toUpperCase().includes(newLocation.toUpperCase()));

    this.setState({
      query: newLocation,
      suggestions: suggestionsToSet,
      showSuggestions: false,
      showInfoAlert: false,
      infoText: '',
      showErrorAlert: false,
      errorText: '',
    });
  }

  // Gets invoked when search input changes
  handleInputChange = (value) => {
    const { locations } = this.props;
    const suggestionsToSet = locations
      .filter((location) => location.toUpperCase().includes(value.toUpperCase()));

    if (suggestionsToSet.length === 0) {
      this.setState({
        query: value,
        suggestions: suggestionsToSet,
        showSuggestions: true,
        showInfoAlert: true,
        infoText: 'No such city found.',
        showErrorAlert: false,
        errorText: '',
      });
    }
    if (value.match(/[a-zA-ZÀ-ÿ\s-,]*/)[0] !== value) {
      this.setState({
        query: value,
        showSuggestions: false,
        showInfoAlert: false,
        infoText: '',
        showErrorAlert: true,
        errorText: 'Please use letters only.',
      });
    }
    if (suggestionsToSet.length !== 0 && value.match(/[a-zA-ZÀ-ÿ\s-,]*/)[0] === value) {
      this.setState({
        query: value,
        suggestions: suggestionsToSet,
        showSuggestions: true,
        showInfoAlert: false,
        infoText: '',
        showErrorAlert: false,
        errorText: '',
      });
    }
  }

  // If element on suggestions list is clicked
  handleSuggestionClick = (suggestion) => {
    const { updateEvents } = this.props;
    updateEvents(suggestion);
    this.setState({
      query: suggestion,
      showSuggestions: false,
      showInfoAlert: false,
      infoText: '',
      showErrorAlert: false,
      errorText: '',
    });
  }

  render() {
    const {
      query, suggestions, showSuggestions, infoText, showInfoAlert, showErrorAlert, errorText,
    } = this.state;

    return (
      <div id="city-search" className="city-search">
        <input
          type="text"
          className="city-search__input"
          placeholder="Search for cities..."
          value={query}
          onChange={(e) => this.handleInputChange(e.target.value)}
          onFocus={() => this.setState({ showSuggestions: true })}
          onBlur={() => setTimeout(() => { this.setState({ showSuggestions: false }); }, 10)}
        />
        <div className={showErrorAlert ? 'city-search__error' : 'city-search__error display-none'}>
          <ErrorAlert text={errorText} />
        </div>
        <ul
          className="city-search__suggestions"
          style={showSuggestions ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}
        >
          <li className={showInfoAlert ? 'city-search__info' : 'city-search__info display-none'}>
            <InfoAlert text={infoText} />
          </li>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
            >
              <button
                type="button"
                className="city-search__button"
                onClick={() => this.handleSuggestionClick(suggestion)}
                onKeyDown={() => this.handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            </li>
          ))}
          <li key="all">
            <button
              type="button"
              className="city-search__all-button"
              onClick={() => this.handleSuggestionClick('')}
              onKeyDown={() => this.handleSuggestionClick('')}
            >
              <b>See all cities</b>

            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
