const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

/* 
A simple request response code
app.get('/', (req, res) => (
    res.send('<h1>Hello world</h1>')
)); 
*/

/* 
A simple request response for specific page
app.get('/about', (req, res) => (
    res.send('<h1>Say about</h1>')
)); */

//setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

/*
Separate separate request response for index.html page and about.html page
app.get('/', (req, res) => (
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
));

app.get('/about', (req, res) => (
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
));
*/

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
];

//Get all posts
app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0)
    {
        res.status(200).json(posts.slice(0, limit));
    }
    else
    {
        res.json(posts);   
    }
})

//Get single post
/*
app.get('/api/posts/:id', (req, res) => {
    console.log(req.params);
    res.json(posts);
})
*/
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json(posts.filter((posts) => posts.id === id));
})

//app.listen(8000, () => console.log("Server is running on port 8000"));

app.listen(port, () => console.log(`Server is running on ${port}`));