const basePath = "https://finnhub.io/api/v1";
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const searchSymbol = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${process.env.FINNHUB_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

module.exports = searchSymbol;
