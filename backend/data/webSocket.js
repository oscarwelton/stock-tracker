const WebSocket = require("ws");
const dotenv = require("dotenv");
dotenv.config();

function webSocket() {
  const socket = new WebSocket(
    `wss://ws.finnhub.io?token=${process.env.FINNHUB_API_KEY}`
  );

  socket.addEventListener("open", function () {
    socket.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
    socket.send(JSON.stringify({ type: "subscribe", symbol: "AMZN" }));
    socket.send(JSON.stringify({ type: "subscribe", symbol: "MSFT" }));
  });

  socket.addEventListener("message", function (event) {
    console.log("Message from server ", event.data);
  });
}

module.exports = webSocket;
