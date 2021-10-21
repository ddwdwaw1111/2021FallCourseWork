const express = require('express');
const app = express.Router();
const posts = require('../models/posts')
app.get('/', (req, res, next) => {
    app.send(posts.GetAll())
})

module.exports = app;