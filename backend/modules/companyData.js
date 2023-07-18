const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

async function getPeers(symbol) {
  let peers = [];
  try {
    await axios
      .get(
        `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      )
      .then((data) => {
        peers = data.data;
      });
  } catch (error) {
    console.error(error);
  }
  return peers;
}

async function earningsCalendar(symbol) {
  try {
    const response = await new Promise((resolve, reject) => {
      finnhubClient.companyEarnings(
        symbol,
        { limit: 4 },
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
  }
}
async function companyProfile(symbol) {
  try {
    const response = await new Promise((resolve, reject) => {
      finnhubClient.companyProfile2(
        { symbol: symbol },
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

async function basicFinancials(symbol) {
  try {
    const response = await new Promise((resolve, reject) => {
      finnhubClient.companyBasicFinancials(
        symbol,
        "all",
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

async function socialSentiment(symbol) {
  let sentiment = {};
  try {
    await axios
      .get(
        `https://finnhub.io/api/v1/stock/social-sentiment?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      )
      .then((data) => {
        sentiment = data.data;
      });
  } catch (error) {
    console.error(error);
  }
  return sentiment;
}

async function companyNews(symbol) {
  try {
    const response = await new Promise((resolve, reject) => {
      finnhubClient.companyNews(
        symbol,
        "2023-07-16",
        "2023-07-17",
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

async function getData(symbol) {
  const earnings = await earningsCalendar(symbol);
  const profile = await companyProfile(symbol);
  const peers = await getPeers(symbol);
  const financials = await basicFinancials(symbol);
  const sentiment = await socialSentiment(symbol);
  const chart = await chartData(symbol);
  const companyNewsArticles = await companyNews(symbol);

  let companyData = {
    profile: profile,
    peers: peers,
    earnings: earnings,
    financials: financials,
    sentiment: sentiment,
    companyNews: companyNewsArticles,
  };

  return companyData;
}

module.exports = getData;
