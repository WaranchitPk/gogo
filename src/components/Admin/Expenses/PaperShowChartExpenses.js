import React from 'react';
import {
  MenuItem,
  Select,
  Paper
} from "@material-ui/core";

const ChartExpenses = ({
  year,
  month,
  onSelectYear,
  onSelectMonth,
  dataYearSelectExpenses,
  dataMonthSelectExpenses
}) => {
  return (
    <div>
      <Paper>
        <Select
          value={year}
          onChange={onSelectYear}
          name='year'>
          {
            dataYearSelectExpenses.map(result => (
              <MenuItem key={result.year} value={result.year}>{result.year}</MenuItem>
            ))
          }
        </Select>
        <Select
          value={month}
          onChange={onSelectMonth}
          name='month'>
          {
            dataMonthSelectExpenses.map(result => (
              <MenuItem key={result.month} value={result.month}>{result.month}</MenuItem>
            ))
          }
        </Select>
      </Paper>
    </div>
  );
};

export default ChartExpenses;
