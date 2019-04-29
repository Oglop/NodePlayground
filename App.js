const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/')
    {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

server.listen(3000);
console.log('Listening on port 3000....');

/*
const EventEmitter = require('events');

//Register listnerer
emitter.on('messageLogged', (eventArgs) => {
    console.log('Listener called', eventArgs)
});

const Logger = require('./Logger');
const logger = new Logger();
logger.on('messageLogged', (eventArgs) => {
    console.log('Listener called', eventArgs)
});

logger.log('message');
*/