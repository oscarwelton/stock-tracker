const axios = require("axios");
const fs = require("fs");
const { matchSorter } = require("match-sorter");

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
const finnhubKey = process.env.FINNHUB_API_KEY;
api_key.apiKey = finnhubKey;
const finnhubClient = new finnhub.DefaultApi();

let baseURL = "https://finnhub.io/api/v1";
let stocksData = {};

async function getQuote(obj) {
  const symbol = obj.symbol;
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
    console.error(error);
  }
}

async function searchSymbol(query) {
  async function searchObjects(query, stocksData) {
    let filteredData = stocksData.filter(
      (obj) =>
        obj.displaySymbol.toLowerCase().includes(query.toLowerCase()) ||
        obj.description.toLowerCase().includes(query.toLowerCase())
    );
    filteredData = matchSorter(filteredData, query, {
      keys: ["displaySymbol", "description"],
    });
    filteredData = filteredData.slice(0, 3);

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

async function saveToJSON(usStocks) {
  const filePath = "./data/stocksJSON.json";
  const data = JSON.stringify(usStocks, null, 2);

  try {
    fs.writeFileSync(filePath, data);
    stocksData = usStocks;
    console.log("Data saved to stocksJSON.json");
  } catch (err) {
    console.log(err);
  }
}

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
    await saveToJSON(usStocks);
  } catch (error) {
    console.error("Error fetching US stocks:", error.message);
  }
};

getUSStocks();

module.exports = searchSymbol;
