// Models
const postModel = require('../models/postModel.js');
const homeModel = require('../models/homeModel.js');
const commentModel = require('../models/commentModel.js');

module.exports = {
    viewPost: async (req, res) => {
        const postId = req.params.post_id;
        const post = await postModel.getPost(postId);

        const posts = await homeModel.getPosts();

        const comments = await commentModel.getComments(postId);

        res.render('post.ejs', {posts: posts, post: post, comments: comments});
    },
    createPost: async (req,res) => {
        const posts = await homeModel.getPosts();

        res.render('postCreate.ejs', {posts: posts});
    },
    createNewPost: async (req,res) => {
        const newPost = req.body;
        const result = await postModel.createNewPost(newPost);
        
        // res.redirect(`/post/read/${result.insertId}`);
        res.json({insertId: result.insertId});
    },
    deletePost: async (req,res) => {
        const postId = req.params.post_id;
        await postModel.deletePost(postId);

        res.redirect('/');
    },
    updatePost: async (req,res) => {
        const postId = req.params.post_id;
        const post = await postModel.getPost(postId);

        const posts = await homeModel.getPosts();

        res.render('postUpdate.ejs', {posts: posts, post:post});
    },
    updateNewPost: async (req,res) => {
        const postId = req.params.post_id;
        const newPostData = req.body;
        await postModel.updatePost(postId, newPostData);

        res.redirect(`/post/read/${postId}`);
    }
}