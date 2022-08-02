

const http = require('http');

const app = require('./serverside/app');

const server = http.createServer(app);
server.listen(process.env.PORT || 8000);