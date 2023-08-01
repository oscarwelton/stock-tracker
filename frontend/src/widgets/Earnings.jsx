import React from "react";
import { getPercentageColor } from "helpers/color-helper";

const Earnings = (props) => {
  return (
    <>
      <div className="earnings-widget">
        <h3>Earnings</h3>
        <div className="earnings">
          {props.earnings.map((earning, index) => (
            <div className="earning" key={index}>
              <p className="earning-header">
                {new Date(earning.period).getFullYear()} - Q{earning.quarter}
              </p>
              <p>Estimated: {earning.estimate}</p>
              <p>Actual: {earning.actual}</p>
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
      </div>
    </>
  );
};

export default Earnings;
