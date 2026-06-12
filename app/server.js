const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'API funcionando correctamente', status: 'ok' }));
});

server.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});