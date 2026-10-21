const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
http.createServer((req,res) => {
  const name = new URL(req.url, 'http://localhost').pathname;
  const files = {'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js'};
  if(!files[name]) {res.writeHead(404);res.end('Not found');return;}
  const ext = path.extname(files[name]);
  res.writeHead(200,{'Content-Type':{'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'}[ext]});
  fs.createReadStream(path.join(root, files[name])).pipe(res);
}).listen(Number(process.env.PORT || 4173), process.env.HOST || '127.0.0.1', function () {
  console.log(`Local: http://${process.env.HOST || '127.0.0.1'}:${this.address().port}`);
});
