const dotenv = require("dotenv");
dotenv.config();

const axios = require("axios");
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();
let alphaVantageKey = process.env.ALPHA_VANTAGE_KEY;

async function getPeers(symbol) {
  let peersArray = [];
  let peerObject = {};
  let peersDataToSend = [];

  try {
    await axios
      .get(
        `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      )
      .then((data) => {
        peersArray = data.data;
      });
  } catch (error) {
    console.error(error);
  }

  await Promise.all(
    peersArray.map(async (peer) => {
      try {
        const quote = await new Promise((resolve, reject) => {
          finnhubClient.quote(peer, (error, data, response) => {
            if (error) {
              reject(error);
            } else {
              resolve(data);
              console.log(data);
            }
          });
        });
        peerObject = { symbol: peer, quote: quote };
        peersDataToSend.push(peerObject);
        return quote;
      } catch (error) {
        console.log(
          "there was an error fetching the quote - company data function"
        );
      }
    })
  );
  return peersDataToSend;
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

async function companyNews(symbol) {
  const alphaUrl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&apikey=${alphaVantageKey}`;
  try {
    const response = await axios.get(alphaUrl);
    return response.data;
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
  const companyNewsArticles = await companyNews(symbol);

  let companyData = {
    profile: profile,
    peers: peers,
    earnings: earnings,
    financials: financials,
    companyNews: companyNewsArticles,
  };

  return companyData;
}

module.exports = getData;
