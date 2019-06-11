const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);
/*
routes.get('/', (req, res) => {
    //res: to return a response to the server
    //req: represents our request
    return res.send(`Hello World ${req.query.name}`); //req.query to grac things on the url localhost:3333?name=gabriel
});
*/

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;