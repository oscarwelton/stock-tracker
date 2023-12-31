const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const { matchSorter } = require("match-sorter");
const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
const finnhubKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();
api_key.apiKey = finnhubKey;

const filePath = "./data/stocks.json";

let baseURL = "https://finnhub.io/api/v1";
let stocksData = {};

const getUSStocks = async () => {
  try {
    const response = await axios.get(`${baseURL}/stock/symbol`, {
      params: {
        exchange: "US",
        token: finnhubKey,
        currency: "USD",
        mic: "XNAS",
        type: "commonstock",
      },
    });
    const usStocks = response.data;
    stocksData = usStocks;
    fs.writeFileSync(filePath, JSON.stringify(usStocks, null, 2));
    console.log("US stocks saved to JSON");
  } catch (error) {
    console.error("Error fetching US stocks:", error.message);
  }
};

async function getQuote(obj) {
  let symbol = "";
  if (typeof obj === "object") {
    symbol = obj.symbol;
  } else {
    symbol = obj;
  }
  try {
    const quote = await new Promise((resolve, reject) => {
      finnhubClient.quote(symbol, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    return quote;
  } catch (error) {
    console.log("there was an error fetching the quote:");
   }
}

async function searchSymbol(query) {
  async function searchObjects(query) {
    const stocksData = JSON.parse(fs.readFileSync(filePath).toString());
    let filteredData = stocksData.filter(
      (obj) =>
        obj.displaySymbol.toLowerCase().includes(query.toLowerCase()) ||
        obj.description.toLowerCase().includes(query.toLowerCase())
    );
    filteredData = matchSorter(filteredData, query, {
      keys: ["displaySymbol", "description"],
    });
    filteredData = filteredData.slice(0, 10);

    for (let obj of filteredData) {
      const quote = await getQuote(obj);
      obj["currentPrice"] = quote.c;
      obj["percentChange"] = quote.dp;
    }
    return filteredData;
  }

  const searchResults = searchObjects(query, stocksData);
  return searchResults;
}

// getUSStocks();

module.exports = searchSymbol, getQuote;
