const StockStats = (props) => {
  const financeData = props.financials.metric;
  const dataLoaded = financeData && Object.keys(financeData).length > 0;

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
        <p>EPS Growth 3Y: {financeData["epsGrowth3Y"]}</p>
        <p>EPS Growth 5Y: {financeData["epsGrowth5Y"]} </p>
        <p>Gross Profit Annual:{financeData["grossMarginAnnual"]}</p>
        <p>Gross Profit 5Y: {financeData["grossMargin5Y"]}</p>
        <p>Net Profit Annual: {financeData["netProfitMarginAnnual"]}</p>
        <p>Net Profit 5Y: {financeData["netProfitMargin5Y"]}</p>
        <p>Current Ratio Annual: {financeData["currentRatioAnnual"]}</p>
        <p>Current Ration Quaterly: {financeData["currentRatioQuarterly"]}</p>
        <p>PE Annual: {financeData["peAnnual"]}</p>
        <p>PE TTM: {financeData["peTTM"]}</p>

      </div>

      <div className="valuationMeasures">
        <h3>Valuation Measures</h3>
        <p>Market Capitalisation: {financeData["marketCapitalization"]}</p>
        <p>Enterprise Valuation: {financeData["enterpriseValue"]}</p>
        <p>Annual Price Earnings: {financeData["peAnnual"]} </p>
        <p>TTM Price Earnings: {financeData["peTTM"]}</p>

      </div>

      <div className="shareStatistics">
        <h3>Share Statistics</h3>
        <p>10-day Trading Volume: {financeData["10DayAverageTradingVolume"]}</p>
        <p>
          3-Month Trading Volume: {financeData["3MonthAverageTradingVolume"]}
        </p>
        <p>
          Price Relaive to S&P 500 4 Week:{" "}
          {financeData["priceRelativeToS&P5004Week"]}
        </p>
        <p>
          Price Relaive to S&P 500 13-Week:{" "}
          {financeData["priceRelativeToS&P50013Week"]}
        </p>
        <p>
          Price Relaive to S&P 500 26-Week:{" "}
          {financeData["priceRelativeToS&P50026Week"]}
        </p>
        <p>
          Price Relaive to S&P 500 52-Week:{" "}
          {financeData["priceRelativeToS&P50052Week"]}
        </p>
        <p>
          Price Relaive to S&P 500 YTD:{" "}
          {financeData["priceRelativeToS&P500Ytd"]}
        </p>
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
        <p>
          Dividend Per Share Annual: {financeData["dividendPerShareAnnual"]}
        </p>
        <p>Dividend Per Share TTM: {financeData["dividendsPerShareTTM"]}</p>
        <p>
          Dividen Yield Indicated - Annual:{" "}
          {financeData["dividendYieldIndicatedAnnual"]}
        </p>
        <p>Payout Ratio - Annual: {financeData["payoutRatioAnnual"]}</p>
        <p>Payout Ratio - TTM: {financeData["payoutRatioTTM"]}</p>
      </div>

      <div className="balanceSheet">
        <h3>Balance Sheet</h3>
        <p>Current Ratio Annual: {financeData["currentRatioAnnual"]}</p>
        <p>Current Ratio Quarterly: {financeData["currentRatioQuarterly"]}</p>
        <p>
          Book Value per Share - Annual:{financeData["bookValuePerShareAnnual"]}
        </p>
        <p>
          Book Value per Share - Quaterly:{" "}
          {financeData["bookValuePerShareQuaterly"]}{" "}
        </p>
        <p>
          Book Value Share Growth Rate - 5Y:{" "}
          {financeData["bookValueShareGrowth5Y"]}
        </p>
        <p>
          Cash Flow per Share Annual: {financeData["cashFlowPerShareAnnual"]}
        </p>
        <p>
          Cash Flow per Share Quaterly:{" "}
          {financeData["cashFlowPerShareQuaterly"]}
        </p>
        <p>Cash Flow per Share TTM: {financeData["cashFlowPerShareTTM"]}</p>
        <p>
          Cash per Share per Share Annual:{" "}
          {financeData["cashPerSharePerShareAnnual"]}
        </p>
        <p>
          Cash per share per share Quaterly:{" "}
          {financeData["cashPerSharePerShareQuarterly"]}
        </p>
      </div>

      <div className="incomeStatement">
        <h3>Income Statement</h3>
        <p>Revenue Growth 3Y: {financeData["revenueGrowth3Y"]}</p>
        <p>Revenue Growth 5Y: {financeData["revenueGrowth5Y"]}</p>
        <p>Revenue Quarterly Growth: {financeData["revenueGrowthQuarterlyYoy"]}</p>
        <p>Revenue Per Share Annual: {financeData["revenuePerShareAnnual"]}</p>

      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

// "revenueEmployeeAnnual": 2.4044,
//         "revenueEmployeeTTM": 2.3481,
//         "revenueGrowth3Y": 14.87,
//         "revenueGrowth5Y": 11.46,
//         "revenueGrowthQuarterlyYoy": -2.51,
//         "revenueGrowthTTMYoy": -0.24,
//         "revenuePerShareAnnual": 24.1536,
//         "revenuePerShareTTM": 24.3007,
//         "revenueShareGrowth5Y": 17.22,

export default StockStats;
