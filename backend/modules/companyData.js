const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

let companyData = {};

async function companyProfile(symbol) {
  finnhubClient.companyProfile2({ symbol: symbol }, (error, data, response) => {
    return data;
  });
}

async function getPeers(symbol) {
  axios
    .get(
      `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
    )
    .then((res) => {
      return res.data;
    });
}

async function earningsCalendar(symbol) {
  finnhubClient.companyEarnings(
    symbol,
    { limit: 4 },
    (error, data, response) => {
      return data;
    }
  );
}

async function basicFinancials(symbol) {
  finnhubClient.companyBasicFinancials(symbol, (error, data, response) => {
    return data;
  });
}

// async function stockCandles() {
//   finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
//     console.log(data)
//   });
// }

async function socialSentiment(symbol) {
  axios
    .get(
      `https://finnhub.io/api/v1/stock/social-sentiment?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
    )
    .then((res) => {

      return res.data;
    });
}

async function getData(symbol) {
  companyData["companyProfile"] = await companyProfile(symbol);
  companyData["basicFinancials"] = await basicFinancials(symbol);
  companyData["earningsCalendar"] = await earningsCalendar(symbol);
  companyData["peers"] = await getPeers(symbol);
  companyData["socialSentiment"] = await socialSentiment(symbol);

  // await stockCandles()
  console.log(companyData);
  return companyData;
}

module.exports = getData;
