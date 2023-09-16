// Models
const postModel = require('../models/postModel.js');
const homeModel = require('../models/homeModel.js');

module.exports = {
    viewPost: async (req, res) => {
        const postId = req.params.post_id;
        const post = await postModel.getPost(postId);

        const posts = await homeModel.getPosts();

        res.render('post.ejs', {posts: posts, post: post});
    },
    createPost: async (req,res) => {
        const posts = await homeModel.getPosts();

        res.render('postCreate.ejs', {posts: posts});
    },
    createNewPost: async (req,res) => {
        const newPost = req.body;
        const result = await postModel.createNewPost(newPost);
        
        res.redirect(`/post/read/${result.insertId}`);
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