// Models
const commentModel = require('../models/commentModel.js');
const postModel = require('../models/postModel.js');
const homeModel = require('../models/homeModel.js');

module.exports = {
    createComment: async (req, res) => {
        const postId = req.params.post_id;
        const commentData = req.body;
        await commentModel.createComment(postId, commentData);

        res.redirect(`/post/read/${postId}`);
    },
    deleteComment: async (req, res) => {
        const commentId = req.params.comment_id;
        const comment = await commentModel.getComment(commentId);

        await commentModel.deleteComment(commentId);

        res.redirect(`/post/read/${comment.post_id}`);
    }
}