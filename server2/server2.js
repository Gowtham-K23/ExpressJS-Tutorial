import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js'; 
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

//Without changing package.json file - type
/*
const express = require('express');
const path = require('path');
const posts = require('./routes/posts');
*/

const port = process.env.PORT || 8000;

//Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Logger middleware
app.use(logger);

//setup static folder
app.use(express.static(path.join(__dirname, 'public')));

/*
let posts = [
    {id: 1, title: "Process One"},
    {id: 2, title: "Process Two"},
    {id: 3, title: "Process Three"}
]
*/
/*
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit)

    if(!isNaN(limit) && limit > 0)
    {
        res.status(200).json(posts.slice(0, limit));
    }
    else
    {
        res.status(200).json(posts);
    }
});

app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post)
    {
        res.status(404).json({msg: `A post with the id of ${id} was not found`});
    }
    else
    {
        res.status(200).json(post);
    }
});
*/

//router statements
//Routes
app.use('/api/posts', posts);

//Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is listening on port ${port}`));