const jwt = "jsonwebtoken";
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log("verified", verified);
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { verifyToken };
