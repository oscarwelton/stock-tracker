const StockStats = (props) => {
  const financeData = props.financials.metric;
  const dataLoaded = financeData && Object.keys(financeData).length > 0;
  console.log(financeData);

  return dataLoaded ? (
    <>
      <button>Overview</button>
      <button>Valuation Measures</button>
      <button>Share Statistics</button>
      <button>Stock Price History</button>
      <button>Earnings</button>
      <button>Dividends</button>
      <div className="Overview">
        <h3>Overview</h3>



        <p>
          EPS Growth: {financeData["epsGrowth3Y"]} (3Y){" "}
          {financeData["epsGrowth5Y"]} (5Y)
        </p>
        <p>
          Gross Profit | Annual:{financeData["grossMarginAnnual"]} | 5Y:
          {financeData["grossMargin5Y"]}
        </p>
        <p>
          Net Profit | Annual:{financeData["netProfitMarginAnnual"]} | 5Y:
          {financeData["netProfitMargin5Y"]}
        </p>
        <p>
          Current Ratio: {financeData["currentRatioAnnual"]} |{" "}
          {financeData["currentRatioQuarterly"]}
        </p>
      </div>

      <div className="valuationMeasures">
        <h3>Valuation Measures</h3>
        <p>Market Capitalisation: {financeData["marketCapitalization"]}</p>
        <p>Annual Price Earnings: {financeData["peAnnual"]} </p>
        <p>TTM Price Earnings: {financeData["peTTM"]}</p>
      </div>

      <div className="shareStatistics">
        <h3>Share Statistics</h3>
        <p>10-day Trading Volume: {financeData["10DayAverageTradingVolume"]}</p>
        <p>3-Month Trading Volume: {financeData["3MonthAverageTradingVolume"]}</p>
      </div>

      <div className="stockPriceHistory">
        <h3>Stock Price History</h3>
        <p>Beta: {financeData["beta"]}</p>
        <p>Volatility: {financeData["3MonthADReturnStd"]}</p>
        <p>52-Week High: {financeData["52WeekHigh"]}</p>
        <p>52-Week Low: {financeData["52WeekLow"]}</p>
        <p>26-Week Price Return: {financeData["26WeekPriceReturnDaily"]}</p>
        <p>13-Week Price Return: {financeData["13WeekPriceReturnDaily"]}</p>
      </div>

      <div className="dividends">
        <h3>Dividends</h3>
        <p>Dividend Growth Rate: {financeData["dividendGrowthRate5Y"]}</p>
        <p>Dividend Per Share: {financeData["dividendPerShareAnnual"]}</p>
        <p>TTM Dividends Per Share: {financeData["dividendsPerShareTTM"]}</p>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default StockStats;

// 52 week high (and date)
// 52 week low (and date)
// revenue growth stats
// beta
// dividend yield
