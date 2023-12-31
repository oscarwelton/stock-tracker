const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
const fs = require("fs");

api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();
const filePath = "./data/news.json";

async function marketNews() {
  try {
    const news = await new Promise((resolve, reject) => {
      finnhubClient.marketNews("finance", {}, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
    fs.writeFileSync(filePath, JSON.stringify(news, null, 2));
  } catch (error) {
    console.error(error);
  }
}


module.exports = marketNews;
