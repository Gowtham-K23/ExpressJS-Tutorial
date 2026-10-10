import express from 'express';
import { createPost, deletePost, getAllPost, getSinglePost, updatePost } from '../controllers/postController.js';
/* 
normal router program
const express = require('express');
*/

const router = express.Router();

/* middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};
*/

//Get all posts
router.get('/', getAllPost);

/*Get all posts using middleware
router.get('/', logger, (req, res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0)
    {
        return res.status(200).json(posts.slice(0, limit));
    }

    res.status(200).json(posts);
});
*/

//Get single post
router.get('/:id', getSinglePost);

/* 
normal router program
module.exports = router;
*/


//create new post
router.post('/', createPost);

//update post
router.put('/:id', updatePost);

//delete post
router.delete('/:id', deletePost);

export default router;