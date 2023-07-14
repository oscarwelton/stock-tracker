const api_key = process.env.FINANCIAL_MODEL_KEY;
const axios = require("axios");

function url(model) {
  return `https://financialmodelingprep.com/api/v3/stock_market/${model}?apikey=${api_key}`;
}

async function gainers() {
  const url = url("gainers");
}


async function losers() {
  const url = url("losers");

}

async function mostActive() {
  const url = url("actives");
}


async function sectors() {
  const url = `https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=${api_key}`;
}
