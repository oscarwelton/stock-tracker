const dotenv = require("dotenv");
dotenv.config();

const api_key = process.env.FINANCIAL_MODEL_KEY;
const axios = require("axios");
const fs = require("fs");

function url(model) {
  return `https://financialmodelingprep.com/api/v3/stock_market/${model}?apikey=${api_key}`;
}

async function gainers() {
  axios
    .get(url("gainers"))
    .then((res) => {
      fs.writeFileSync("./data/gainers.json", JSON.stringify(res.data, null, 2));
    })
    .catch((err) => {
      console.log(err);
    });
}

async function losers() {
  axios
    .get(url("gainers"))
    .then((res) => {
      fs.writeFileSync("./data/losers.json", JSON.stringify(res.data, null, 2));
    })
    .catch((err) => {
      console.log(err);
    });
}

async function movers() {
  axios
    .get(url("gainers"))
    .then((res) => {
      fs.writeFileSync("./data/movers.json", JSON.stringify(res.data, null, 2));
    })
    .catch((err) => {
      console.log(err);
    });
}

async function sectors() {
  const url = `https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=${api_key}`;

  axios
  .get(url)
  .then((res) => {
    fs.writeFileSync("./data/sectors.json", JSON.stringify(res.data, null, 2));
  })
  .catch((err) => {
    console.log(err);
  })
};

async function modelData() {
  await gainers();
  await losers();
  await movers();
  await sectors();
}


module.exports = modelData;

// const axios = require('axios');

// axios.get('https://api.example.com/data')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
