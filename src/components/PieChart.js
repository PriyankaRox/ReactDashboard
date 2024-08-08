import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './PieChart.css';

const PieChart = () => {
  const percentage = 70;

  return (
    <div className="pie-chart-container">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}% Goal Completed`}
        styles={buildStyles({
          textColor: "white",
          pathColor: "#5bc0de",
          trailColor: "#3e3e3e",
        })}
      />
      <div className="goal-text"></div>
    </div>
  );
};

export default PieChart;
