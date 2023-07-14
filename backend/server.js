const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');
const { verifyToken } = require("./middleware/auth");
const searchSymbol = require("./data/stockApi");

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// searchSymbol("SH").then((data) => console.log(data));

const PORT = process.env.PORT || 3001;

app.get("/generate-jwt", async (req, res) => {
  const sessionId = uuidv4();
  const token = jwt.sign({ sessionId }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.cookie("token", token, { httpOnly: true });
  res.json(token);
});

app.get("/", async (req, res) => {
  res.json({ message: "Hello from root!" });
})

app.post("/search", async (req, res) => {
  const query = req.body.value;
  searchSymbol(query).then((data) => res.json(data))
  .catch((error) => console.error(error));
})

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
});
