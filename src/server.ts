import 'dotenv/config'
import app from './app';
import https from 'http';


let port = '3001';

let server = https.createServer(app);

server.listen(process.env.PORT || port);

server.on('listening', () => {
    return console.log('Port listening at port 3001');
})
