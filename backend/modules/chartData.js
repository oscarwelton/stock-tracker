const dotenv = require("dotenv");
dotenv.config();

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();


async function chartData(chartObject) {
  try {
    const response = await new Promise((resolve, reject) => {
      finnhubClient.stockCandles(
        symbol,
        resolution,
        from,
        to,
        (error, data, response) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = chartData;
