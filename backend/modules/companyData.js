const dotenv = require("dotenv");
dotenv.config();

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

// async function companyProfile() {
//   finnhubClient.companyProfile2({ symbol: "AAPL" }, (error, data, response) => {
//     console.log(data);
//   });
// }

async function earningsCalendar() {
  finnhubClient.companyEarnings(
    "AAPL",
    { limit: 4 },
    (error, data, response) => {
      console.log(data);
    }
  );
}

// async function stockCandles() {
//   finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
//     console.log(data)
//   });
// }

async function socialSentiment() {
  finnhubClient.socialSentiment("AAPL", (error, data, response) => {
    console.log(data);
  });
}

async function getData() {
  // await companyProfile();
  // await earningsCalendar();
  await socialSentiment();
  // await stockCandles()
}

getData();
