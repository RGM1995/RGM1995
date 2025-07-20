const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
  } else if (req.url.startsWith('/api/paymentMethods')) {
    // TODO: implement call to Adyen paymentMethods API
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({}));
  } else if (req.url.startsWith('/api/makePayment')) {
    // TODO: implement call to Adyen payments API
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ resultCode: 'Authorised' }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
