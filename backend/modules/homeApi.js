const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];

api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

async function marketNews() {
  try {
    const news = await new Promise((resolve, reject) => {
      finnhubClient.marketNews("general", {}, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data.slice(0, 5));
        }
      });
    });
    return news;
  } catch (error) {
    console.error(error);
  }
}

module.exports = marketNews;
