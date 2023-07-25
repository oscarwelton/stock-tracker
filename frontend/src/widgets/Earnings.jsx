import React from "react";
import { getPercentageColor } from "helpers/color-helper";

const Earnings = (props) => {


  return (
    <div className="earnings">
      {props.earnings.map((earning, index) => (
        <div className="earning" key={index}>
          <p>
            Q{earning.quarter} - {new Date(earning.period).getFullYear()}
          </p>
          <p>Actual: {earning.actual}</p>
          <p>Estimated: {earning.estimate}</p>
          <p>
            <span style={{ color: getPercentageColor(earning.surprisePercent) }}>
              {earning.surprise.toFixed(2)} ({earning.surprisePercent.toFixed(2)}%)
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Earnings;
