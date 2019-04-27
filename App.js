const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register listnerer
emitter.on('messageLogged', function(eventArgs){
    console.log('Listener called', eventArgs)
});

emitter.emit('messageLogged', { id:1, url: 'https://hej.se'});