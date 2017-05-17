const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080, clientTracking: true });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {

  });
  ws.send('something');
});

wss.broadcast = function broadcast(message) {
  wss.clients.forEach((client) => {
    if (client.upgradeReq.url.slice(1) === message.payload.streamId) {
      client.send(JSON.stringify(message.payload));
    }
  });
};

module.exports = wss;
