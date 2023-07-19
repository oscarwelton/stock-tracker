const dotenv = require("dotenv");
dotenv.config();
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

async function chartData(data) {
  let chartData = {};
  const period = ["1d", "7d", "1m", "3m", "1y"];

  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const currentPeriod = period[i];

    try {
      const chart = await new Promise((resolve, reject) => {
        finnhubClient.stockCandles(
          d.symbol,
          d.resolution,
          d.from,
          d.to - 200000,
          (error, data, response) => {
            if (error) {
              reject(error);
            } else {
              resolve(data);
            }
          }
        );
      });

      chartData[currentPeriod] = chart;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return chartData;
}

module.exports = chartData;
