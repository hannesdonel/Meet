import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => ({
    color: this.color,
  })

  render() {
    const { text } = this.props;
    return (
      <div className="alert">
        <p style={this.getStyle()}>{text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }

  getStyle = () => ({
    color: this.color,
    fontStyle: 'italic',
  })
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }

  getStyle = () => ({
    color: this.props.color || this.color,
  });
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }

  getStyle = () => ({
    color: this.props.color || this.color,
    fontSize: '12px',
  })
}

export { InfoAlert, WarningAlert, ErrorAlert };
