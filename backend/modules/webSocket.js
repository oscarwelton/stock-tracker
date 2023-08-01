const WebSocket = require("ws");
const dotenv = require("dotenv");
dotenv.config();

function webSocket(symbol) {
  const socket = new WebSocket(
    `wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`
  );

  socket.addEventListener("open", function (event) {
    socket.send(JSON.stringify({ type: "subscribe", symbol: symbol }));
  });
}

module.exports = webSocket;
