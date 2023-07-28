const dotenv = require("dotenv");
dotenv.config();

const api_key = process.env.FINANCIAL_MODEL_KEY;
const axios = require("axios");

function url(model) {
  return `https://financialmodelingprep.com/api/v3/stock_market/${model}?apikey=${api_key}`;
}

async function gainers() {
  try {
    const response = await new Promise((resolve, reject) => {
      axios
        .get(url("gainers"))
        .then((res) => {
          resolve(res.data.slice(0, 5));
        })
        .catch((err) => {
          reject(err);
        });
    });

    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function losers() {
  try {
    const response = await new Promise((resolve, reject) => {
      axios
        .get(url("losers"))
        .then((res) => {
          resolve(res.data.slice(0, 5));
        })
        .catch((err) => {
          reject(err);
        });
    });

    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function movers() {
  try {
    const response = await new Promise((resolve, reject) => {
      axios
        .get(url("actives"))
        .then((res) => {
          resolve(res.data.slice(0, 5));
        })
        .catch((err) => {
          reject(err);
        });
    });

    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function sectors() {
  const url = `https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=${api_key}`;
  try {
    const response = await new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
async function modelData() {
  try {
    const [gainersData, losersData, moversData, sectorsData] =
      await Promise.all([gainers(), losers(), movers(), sectors()]);

    let data = {
      gainers: gainersData,
      losers: losersData,
      movers: moversData,
      sectors: sectorsData,
    };

    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = modelData;
