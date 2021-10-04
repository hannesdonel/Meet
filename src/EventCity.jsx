import React, { Component } from 'react';
import {
  ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter, ResponsiveContainer,
} from 'recharts';

class EventCity extends Component {
  componentDidUpdate() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const {
      setCurrentLocation, setEventCount, handleChartClick, getData,
    } = this.props;

    return (
      <ResponsiveContainer height="100%" width={1500}>
        <ScatterChart>
          <CartesianGrid
            strokeDasharray="3 3"
            onClick={async () => {
              await setCurrentLocation(''); setEventCount(0);
            }}
          />
          <XAxis
            onClick={(event) => { handleChartClick(event); }}
            dataKey="city"
            name="City"
            type="category"
          />
          <YAxis width={25} dataKey="number" name="Number of events" type="number" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={getData()} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}

export default EventCity;
