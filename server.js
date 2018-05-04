import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 3000;
server.listen(PORT);
console.log('Server is running');

const users = [];
const connections = [];

io.sockets.on('connection',(socket) => {
   connections.push(socket);
   console.log(' %s sockets is connected', connections.length);
   io.sockets.emit('event_A')

   socket.on('disconnect', () => {
      connections.splice(connections.indexOf(socket), 1);
   });

   socket.on('event_B', () => {
      console.log('FuncB : I got a event_B from Client.');
      io.sockets.emit('Response_B');
   });

   socket.on('event_C', () => {
      console.log('FuncC : I got a event_C from Client.');
      io.sockets.emit('Response_C');
   });

   socket.on('sending message', (message) => {
      console.log('Message is received :', message);
      io.sockets.emit('new message', {message: message});
   });
});

app.get('/', (req, res) => {
   res.sendFile();
});