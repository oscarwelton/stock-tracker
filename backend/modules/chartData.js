const dotenv = require("dotenv");
dotenv.config();
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

async function chartData(data) {
  let chartData = {};
  let chart = {};
  const period = ["1d", "7d", "1m", "3m", "1y"];
  let index = 0;

  await Promise.all(
    data.map(async (d) => {
      try {
        chart = await new Promise((resolve, reject) => {
          finnhubClient.stockCandles(
            d.symbol,
            d.resolution,
            d.from,
            d.to - 500000,
            (error, data, response) => {
              if (error) {
                reject(error);
              } else {
                chartData[period[index]] = chart;
                resolve(data);
              }
            }
          );
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
      index++;
    })
    );
    return chartData;
}

module.exports = chartData;
