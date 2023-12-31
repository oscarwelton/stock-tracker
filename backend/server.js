const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const searchSymbol = require("./modules/stockApi");
const getData = require("./modules/companyData");
const chartData = require("./modules/chartData");
const modelData = require("./modules/marketModels");
const webSocket = require("./modules/webSocket");
// const marketNews = require("./modules/newsApi");

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {});

// modelData();
// marketNews().then ((data) => console.log(data));

app.get("/market-news", async (req, res) => {
  const newsBuffer = fs.readFileSync("./data/news.json");
  const newsData = JSON.parse(newsBuffer.toString());
  res.json(newsData);
});

app.get("/headlines", async (req, res) => {
  try {
    const combinedData = await modelData();
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
    res.json(returnData);
  } catch (error) {
    console.error("Error retrieving company data:", error);
  }
});

app.post("/search", async (req, res) => {
  const query = req.body.value;
  searchSymbol(query)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.error(error));
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/chart", async (req, res) => {
  try {
    const data = req.body;
    res.json(await chartData(data));
  } catch (error) {
    console.error("Error retrieving chart data:", error);
  }
});

app.post("/peers", async (req, res) => {
  try {
    const data = req.body;
    res.json(await getPeers(data));
  } catch (error) {
    console.error("Error retrieving peers data:", error);
  }
});
