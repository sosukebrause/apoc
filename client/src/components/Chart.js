import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

// const data = [
//   { argument: 1, value: 10 },
//   { argument: 2, value: 20 },
//   { argument: 3, value: 30 },
// ];

export default (props) => (
  <Paper>
    <Chart
      data={props.data}
    >
      <ArgumentAxis title = {props.title} />
      <ValueAxis />

      <LineSeries valueField="dailyInfected" argumentField="date" />
      <LineSeries valueField="dailydeaths" argumentField="date" />
    </Chart>
  </Paper>
);