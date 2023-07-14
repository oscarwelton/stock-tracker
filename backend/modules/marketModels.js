const api_key = process.env.FINANCIAL_MODEL_KEY;
const axios = require("axios");

function url(model) {
  return `https://financialmodelingprep.com/api/v3/stock_market/${model}?apikey=${api_key}`;
}

async function gainers() {
  axios
    .get(url("gainers"))
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function losers() {
  axios
    .get(url("gainers"))
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function mostActive() {
  axios
    .get(url("gainers"))
    .then((res) => {
      console.log(res.data);
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
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
};

export { gainers, losers, mostActive, sectors };

// const axios = require('axios');

// axios.get('https://api.example.com/data')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
