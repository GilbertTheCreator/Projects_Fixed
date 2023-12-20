const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const PORT = 3000;

const readFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

const requestHandler = async (req, res) => {
  try {
    if (req.method === 'GET' && req.url === '/api/users') {
      const filePath = path.join(__dirname, 'users.json');
      
      const data = await readFilePromise(filePath);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } catch (error) {
    console.error('Error:');
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});