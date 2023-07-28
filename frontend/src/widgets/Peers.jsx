import { getPercentageColor } from "helpers/color-helper";

const peers = ({ peers }) => {
  return (
    <div className="peers">
      {peers.map((peer, index) => (
        <div className="peer" key={index}>
          <div className="peer-header">
            <p className="peer-symbol">{peer.symbol}</p>
            <p className="peer-quote"> {peer.quote.c.toFixed(2)}</p>
          </div>
          <p className="peer-data" style={{ color: getPercentageColor(peer.quote.d)}}>
            {peer.quote.d.toFixed(2)} ({peer.quote.dp.toFixed(2)}%)
          </p>
        </div>
      ))}
    </div>
  );
};

export default peers;
