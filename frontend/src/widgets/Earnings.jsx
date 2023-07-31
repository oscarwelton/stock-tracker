import React from "react";
import { getPercentageColor } from "helpers/color-helper";

const Earnings = (props) => {
  return (
    <>
      <h3>Earnings</h3>
      <div className="earnings">
        {props.earnings.map((earning, index) => (
          <div className="earning" key={index}>
            <p>
              Q{earning.quarter} - {new Date(earning.period).getFullYear()}
            </p>
            <p>Actual: {earning.actual}</p>
            <p>Estimated: {earning.estimate}</p>
            <p>
              <span
                style={{ color: getPercentageColor(earning.surprisePercent) }}
              >
                {earning.surprise} ({earning.surprisePercent}%)
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Earnings;
