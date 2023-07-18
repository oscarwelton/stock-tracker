const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const searchSymbol = require("./modules/stockApi");
const getData = require("./modules/companyData");
const chartData = require("./modules/chartData");
// const marketNews = require("./modules/newsApi");
// const modelData = require("./modules/marketModels");

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {
});

// modelData();
// marketNews().then ((data) => console.log(data));

app.get("/market-news", async (req, res) => {
  const newsBuffer = fs.readFileSync("./data/news.json");
  const newsData = JSON.parse(newsBuffer.toString());
  res.json(newsData);
});

app.get("/headlines", async (req, res) => {
  try {
    const gainersBuffer = fs.readFileSync("./data/gainers.json");
    const gainersData = JSON.parse(gainersBuffer.toString());

    const losersBuffer = fs.readFileSync("./data/losers.json");
    const losersData = JSON.parse(losersBuffer.toString());

    const moversBuffer = fs.readFileSync("./data/movers.json");
    const moversData = JSON.parse(moversBuffer.toString());

    const sectorsBuffer = fs.readFileSync("./data/sectors.json");
    const sectorsData = JSON.parse(sectorsBuffer.toString());

    const combinedData = {
      gainers: gainersData.slice(0, 5),
      losers: losersData.slice(0, 5),
      movers: moversData.slice(0, 5),
      sectors: sectorsData,
    };

    res.json(combinedData);
  } catch (error) {
    console.error("Error retrieving headlines:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const returnData = await getData(symbol);
    // console.log(returnData);
    res.json(returnData);
  } catch(error) {
    console.error("Error retrieving company data:", error);
  }
});

app.post("/search", async (req, res) => {
  const query = req.body.value;
  searchSymbol(query)
    .then((data) => res.json(data))
    .catch((error) => console.error(error));
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/chart", async (req, res) => {
  const data = req.body;
  console.log(data);
  // const returnData = await chartData(data[3]);
  // res.json(returnData);
});


// const WebSocket = require("ws");

// function webSocket() {
//   const socket = new WebSocket(
//     `wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`
//   );

//   socket.addEventListener("open", function () {
//     socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
//     socket.send(JSON.stringify({ type: "subscribe", symbol: "AMZN" }));
//     socket.send(JSON.stringify({ type: "subscribe", symbol: "MSFT" }));
//   });

//   socket.addEventListener("message", function (event) {
//     console.log("Message from server ", event.data);
//   });
// }

// searchSymbol("SH").then((data) => console.log(data));
