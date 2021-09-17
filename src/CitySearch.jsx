import React, { Component } from 'react';

class CitySearch extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      suggestions: [],
    };
  }

  handleInputChange = (value) => {
    const { locations } = this.props;
    const suggestions = locations
      .filter((location) => location.toUpperCase().indexOf(value.toUpperCase()) > -1);
    this.setState({
      query: value,
      suggestions,
    });
  }

  handleSuggestionClick = (suggestion) => {
    this.setState({
      query: suggestion,
    });
  }

  render() {
    const { query, suggestions } = this.state;

    return (
      <div className="city-search">
        <input
          type="text"
          className="city-search__input"
          value={query}
          onChange={(e) => this.handleInputChange(e.target.value)}
        />
        <ul className="city-search__suggestions">
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
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
