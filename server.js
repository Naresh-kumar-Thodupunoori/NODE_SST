const http = require('http');
const fs = require('fs');

const loginContent = fs.readFileSync('login.html');
const indexContent = fs.readFileSync('index.html');


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(loginContent);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(indexContent);
    }
});

const port = 3001;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
