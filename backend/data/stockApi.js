// const basePath = "https://finnhub.io/api/v1";
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// const searchSymbol = async (query) => {
//   const url = `${basePath}/search?q=${query}&token=${process.env.FINNHUB_API_KEY}`;
//   const response = await fetch(url);

//   if (!response.ok) {
//     const message = `An error has occured: ${response.status}`;
//     throw new Error(message);
//   }

//   return await response.json();
// };

// module.exports = searchSymbol;

// import fetch from 'node-fetch';

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

let baseURL = 'https://finnhub.io/api/v1';
let finnhubKey = process.env.FINNHUB_API_KEY;

async function searchSymbol(query) {
  const url = new URL(`${baseURL}/search`);
  url.searchParams.append('q', query);
  url.searchParams.append('token', finnhubKey);

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => {
      console.error(error);
    });
}

module.exports = searchSymbol;
