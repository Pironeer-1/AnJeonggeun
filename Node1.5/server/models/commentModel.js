const db = require('../config/db.js');

module.exports = {
    createComment: async(postId, commentData)=>{
        // console.log(commentData);
        
        const query = 'INSERT INTO Comments(post_id, username, content) VALUES(?, ?, ?);';
        const comment = await db.query(query, [postId, commentData.username, commentData.comment]);

        // const query = 'select * from Comments;'
        // const comments = await db.query(query);

        // console.log(comments[0]);
    },
    getComments: async(postId)=>{
        const query = 'SELECT * FROM Comments WHERE post_id=?;';
        const comments = await db.query(query, [postId]);


        // console.log(comments);

        return comments[0];
    },
    getComment: async(commentId)=>{
        const query = 'SELECT * FROM Comments WHERE comment_id=?;';
        const comment = await db.query(query, [commentId]);
        const postId = comment[0][0];

        return postId;
    },
    deleteComment: async (commentId) => {
        const query = 'DELETE FROM Comments WHERE comment_id=?;';
        await db.query(query, [commentId]);
    }
}