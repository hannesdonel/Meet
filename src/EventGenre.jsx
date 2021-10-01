import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Sector,
} from 'recharts';

// const data = [
//   { name: 'Group A', value: 400, color: '#0088FE' },
//   { name: 'Group B', value: 300, color: '#00C49F' },
//   { name: 'Group C', value: 300, color: '#FFBB28' },
//   { name: 'Group D', value: 200, color: '#FF8042' },
// ];

class EventGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: '',
    };
  }

    getData = () => {
      const { events } = this.props;
      const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

      const data = genres.map((genre) => {
        const value = events.filter(({ summary }) => summary.split(' ').toString().includes(genre)).length;
        return { name: genre, value };
      });
      return data;
    }

    handleMouseOver = (_, index) => {
      this.setState({
        activeIndex: index,
      });
    }

    handleMouseLeave = () => {
      this.setState({
        activeIndex: null,
      });
    }

    renderActiveShape = (props) => {
      const RADIAN = Math.PI / 180;
      const {
        cx, cy, midAngle, innerRadius, outerRadius,
        startAngle, endAngle, fill, percent,
      } = props;
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const mx = cx + (outerRadius + 30) * cos;
      const my = cy + (outerRadius + 30) * sin;
      const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      const ey = my;
      const textAnchor = cos >= 0 ? 'start' : 'end';

      return (
        <g>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            dy={30}
            textAnchor={textAnchor}
            fill={fill}
          >
            {`${(percent * 100).toFixed(2)}%`}
          </text>
        </g>
      );
    };

    render() {
      const { activeIndex } = this.state;
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#99007f'];

      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={this.renderActiveShape}
              data={this.getData()}
              cx="50%"
              cy="50%"
              label={({ name }) => `${name}`}
              labelLine={false}
              outerRadius="60%"
              dataKey="value"
              onMouseEnter={this.handleMouseOver}
              onMouseLeave={this.handleMouseLeave}
            >
              {this.getData().map((entry, index) => (
                <Cell
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      );
    }
}

export default EventGenre;
