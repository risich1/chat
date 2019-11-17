const Websocket = require('ws');
const fs = require('fs');

const server = new Websocket.Server({ port: 3000 });


server.on('connection', ws => {
    console.log('new connection');
    ws.send('Welcome!');

    let d = Date(Date.now());
    d = d.toString();

    let message = `Connected: ${d}\n\n`;

    fs.appendFile("log.txt", message, error => {
        
    });
    ws.on('message', message => {

        let log = `DATA: ${message}\n\n`;
            
        fs.appendFile("log.txt", log, error => {
            
        });
        
        server.clients.forEach(client => {
            client.send(message);
        });
    });

    ws.on('close', () => {
        console.log('disconnect');
    });
});


