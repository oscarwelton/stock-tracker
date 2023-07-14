const { useState } = require("react");

const Headlines = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);

  fetch("http://localhost:3001/gainers")
    .then((res) => res.json())
    .then((json) => setGainers(json));


  fetch("http://localhost:3001/losers")
    .then((res) => res.json())
    .then((json) => setLosers(json));


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
        {losers.map((loser, index) => (
          <div className="loser" key={index}>
            <p>{loser.symbol} - {loser.name}</p>
            <p>{loser.price} USD | {loser.changesPercentage} %</p>
            </div>
        ))}
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
