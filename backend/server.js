const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", async (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port 8000.`);
});
