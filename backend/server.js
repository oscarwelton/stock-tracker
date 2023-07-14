const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const searchSymbol = require("./modules/stockApi");
// const jwt = require("jsonwebtoken");
// const { v4: uuidv4 } = require("uuid");
// const { verifyToken } = require("./middleware/auth");
// const marketNews = require("./modules/newsApi");
const modelData = require("./modules/marketModels");

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  res.json({ message: "Hello from root!" });
});

// modelData();

// const news = marketNews().then ((data) => console.log(data));

app.get("/market-news", async (req, res) => {
  const newsBuffer = fs.readFileSync("./data/news.json");
  const newsData = JSON.parse(newsBuffer.toString());
  res.json(newsData);
});

app.get("/gainers", async (req, res) => {
  const gainersBuffer = fs.readFileSync("./data/gainers.json");
  const gainersData = JSON.parse(gainersBuffer.toString());
  res.json(gainersData.slice(0, 5));
});

app.get("/losers", async (req, res) => {
  const losersBuffer = fs.readFileSync("./data/losers.json");
  const losersData = JSON.parse(losersBuffer.toString());
  res.json(losersData.slice(0, 5));
});

app.get("/movers", async (req, res) => {
  const moversBuffer = fs.readFileSync("./data/movers.json");
  const moversData = JSON.parse(moversBuffer.toString());
  res.json(moversData.slice(0, 5));
});

app.get("/sectors", async (req, res) => {
  const sectorsBuffer = fs.readFileSync("./data/sectors.json");
  const sectorsData = JSON.parse(sectorsBuffer.toString());
  res.json(sectorsData);
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



// app.get("/generate-jwt", async (req, res) => {
//   const sessionId = uuidv4();
//   const token = jwt.sign({ sessionId }, process.env.JWT_SECRET, {
//     expiresIn: "7d",
//   });
//   res.cookie("token", token, { httpOnly: true });
//   res.json(token);
// });

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
