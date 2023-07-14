const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const axios = require("axios");
const fs = require("fs");

let baseURL = "https://finnhub.io/api/v1";
let finnhubKey = process.env.FINNHUB_API_KEY;

let stocksData = {};

async function searchSymbol(query) {

  function searchObjects(query, stocksData) {
    const filteredData = stocksData.filter(
      (obj) =>
        obj.displaySymbol.toLowerCase().includes(query.toLowerCase()) ||
        obj.description.toLowerCase().includes(query.toLowerCase())
    );
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
