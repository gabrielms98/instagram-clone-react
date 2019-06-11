const express =  require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express(); //create a server that can be accessed via browser

const server = require('http').Server(app);
const io = require('socket.io')(server);

//connect to mongodb
mongoose.connect('mongodb+srv://admin:admininsta@cluster0-uvjq6.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333); //port to be listened on localhost


