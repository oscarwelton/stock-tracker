import { getPercentageColor } from "helpers/color-helper";
import FlexBetween from "components/FlexBetween";
import React, { useState } from "react";

const Peers = ({ peers }) => {
  const [isShown, setIsShown] = useState(-1);

  return (
    <div className="peers">
      {peers.map((peer, index) => (
        <div
          className="peer"
          key={index}
          onMouseEnter={() => setIsShown(index)}
          onMouseLeave={() => setIsShown(-1)}
        >
          <div className="peer-header">
            <p className="peer-symbol">{peer.symbol}</p>
            <p className="peer-quote"> {peer.quote.c}</p>
          </div>

          <FlexBetween style={{ color: getPercentageColor(peer.quote.d) }}>
            <p className="peer-data">{peer.quote.d}</p>
            <p>({peer.quote.dp.toFixed(2)}%)</p>
          </FlexBetween>
          {isShown === index && (
            <div className="peer-info">
              <p>Opening: {peer.quote.o}</p>
              <p>Previous Close: {peer.quote.pc}</p>
              <p>High: {peer.quote.h}</p>
              <p>Low: {peer.quote.l}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Peers; // Export the component for use in other parts of the application
