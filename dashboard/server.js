const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const DIR = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.json': 'application/json',
  '.ico':  'image/x-icon',
};

http.createServer((req, res) => {
  let urlPath = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(DIR, urlPath);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(file);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`✦ Dashboard: http://localhost:${PORT}`);
  console.log('  Зогсоохдоо Ctrl+C дарна уу.');
});
