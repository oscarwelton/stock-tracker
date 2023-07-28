const { useState, useEffect } = require("react");
const { getPercentageColor } = require("../helpers/color-helper.js");

const Performers = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [movers, setMovers] = useState([]);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/headlines")
      .then((res) => res.json())
      .then((json) => {
        setGainers(json.gainers);
        setLosers(json.losers);
        setMovers(json.movers);
        setSectors(json.sectors["sectorPerformance"]);
      });
  }, []);

  return (
    <>
      <div className="gainers">
        <h3>Gainers</h3>
        {gainers.map((gainer, index) => (
          <div className="gainer" key={index}>
            <p>
              {gainer.symbol} - {gainer.name}
            </p>
            <p>
              {gainer.price.toFixed(2)} |
              <span
                style={{ color: getPercentageColor(gainer.changesPercentage) }}
              >
                {" "}
                {gainer.changesPercentage.toFixed(2)} %
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="losers">
        <h3>Losers</h3>
        {losers.map((loser, index) => (
          <div className="loser" key={index}>
            <p>
              {loser.symbol} - {loser.name}
            </p>
            <p>
              {loser.price.toFixed(2)} USD |{" "}
              <span
                style={{ color: getPercentageColor(loser.changesPercentage) }}
              >
                {loser.changesPercentage.toFixed(2)} %
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="movers">
        <h3>Movers</h3>
        {movers.map((mover, index) => (
          <div className="mover" key={index}>
            <p>
              {mover.symbol} - {mover.name}
            </p>
            <p>
              {mover.price.toFixed(2)} USD |{" "}
              <span
                style={{ color: getPercentageColor(mover.changesPercentage) }}
              >
                {mover.changesPercentage.toFixed(2)} %
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="sectors">
        <h3>Sectors</h3>
        {Object.keys(sectors).map((key, index) => (
          <div className="sector" key={index}>
            <p>{sectors[key].sector} </p>
            <p>
              <span
                style={{
                  color: getPercentageColor(sectors[key].changesPercentage),
                }}
              >
                {sectors[key].changesPercentage}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Performers;
