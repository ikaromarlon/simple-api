const bootstrap = require('./bootstrap');
const server = require('./server');
const connection = require('./database/connection');

bootstrap();
connection();

server.listen(process.env.APP_PORT || 3000);