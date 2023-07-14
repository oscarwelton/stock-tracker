const { useState } = require("react");

const Headlines = () => {
  const [gainers, setGainers] = useState([]);

  fetch("http://localhost:3001/gainers")
    .then((res) => res.json())
    .then((json) => setGainers(json));

  return (
    <>
      <div className="gainers">
        <h3>Gainers</h3>
        {gainers.map((gainer, index) => (
          <div className="gainer" key={index}>
            <p>{gainer.symbol} - {gainer.name}</p>
            <p>{gainer.price} USD | +{gainer.changesPercentage} %</p>
          </div>
        ))}
      </div>
      <div className="losers">
        <h3>Losers</h3>
      </div>
      <div className="volume">
        <h3>Volume</h3>
      </div>
      <div className="sectors">
        <h3>Secotrs</h3>
      </div>
    </>
  );
};

export default Headlines;
