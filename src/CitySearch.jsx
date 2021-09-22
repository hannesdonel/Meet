import React, { Component } from 'react';

class CitySearch extends Component {
  constructor(props) {
    super(props);

    const { locations } = this.props;

    this.state = {
      query: '',
      suggestions: locations,
      showSuggestions: undefined,
    };
  }

  handleInputChange = (value) => {
    const { locations } = this.props;
    const suggestionsToSet = locations
      .filter((location) => location.toUpperCase().includes(value.toUpperCase()));
    this.setState({
      query: value,
      suggestions: suggestionsToSet,
      showSuggestions: true,
    });
  }

  handleSuggestionClick = (suggestion) => {
    const { updateEvents } = this.props;
    updateEvents(suggestion);
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });
  }

  render() {
    const { query, suggestions, showSuggestions } = this.state;

    return (
      <div className="city-search">
        <input
          type="text"
          className="city-search__input"
          value={query}
          onChange={(e) => this.handleInputChange(e.target.value)}
          onFocus={() => this.setState({ showSuggestions: true })}
          onBlur={() => setTimeout(() => { this.setState({ showSuggestions: false }); }, 10)}
        />
        <ul
          className="city-search__suggestions"
          style={showSuggestions ? {} : { display: 'none' }}
        >
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
