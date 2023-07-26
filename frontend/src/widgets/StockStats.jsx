const StockStats = (props) => {
  const financeData = props.financials.metric;
  const dataLoaded = financeData && Object.keys(financeData).length > 0;

  return dataLoaded ? (
    <div className="financials">
      <p>52-Week High: {financeData['52WeekHigh']}</p>
      <p>52-Week Low: {financeData['52WeekLow']}</p>
      <p>Beta: {financeData['beta']}</p>
      <p>26-Week Price Return: {financeData['26WeekPriceReturnDaily']}</p>
      <p>13-Week Price Return: {financeData['13WeekPriceReturnDaily']}</p>
      <p>Volatility: {financeData['3MonthADReturnStd']}</p>
      <p>EPS Growth: {financeData['epsGrowth3Y']} (3Y) {financeData['epsGrowth5Y']} (5Y)</p>
      <p>Gross Profit |  Annual:{financeData['grossMarginAnnual']} | 5Y:{financeData['grossMargin5Y']}</p>
      <p>Net Profit |  Annual:{financeData['netProfitMarginAnnual']} | 5Y:{financeData['netProfitMargin5Y']}</p>
      <p>Current Ration: {financeData['currentRatioAnnual']} | {financeData['currentRatioQuarterly']}</p>

    </div>
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
