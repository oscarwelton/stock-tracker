const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];

api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

function marketNews() {
  finnhubClient.marketNews("general", {}, (error, data, response) => {
    console.log(data);
  });
}

module.exports = marketNews;
