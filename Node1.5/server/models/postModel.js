const db = require('../config/db.js');

module.exports = {
    getPost: async (post_id)=>{
        const query = 'SELECT * FROM Posts WHERE post_id=?;';
        const posts = await db.query(query, [post_id]);

        return posts[0][0];
    },
    createNewPost: async (newPost) => {
        const query = 'INSERT INTO Posts(title, content) VALUES(?, ?);';
        const createdNewPost = await db.query(query, [newPost.title, newPost.content]);

        // console.log(createdNewPost);
        return createdNewPost[0];
    },
    deletePost: async (post_id)=>{
        const query = 'DELETE FROM Posts WHERE post_id=?;';
        await db.query(query, [post_id]);
    },
    updatePost: async (post_id, newPostData)=>{
        const query = 'UPDATE Posts SET title=?, content=? WHERE post_id=?;';
        await db.query(query, [newPostData.title, newPostData.content, post_id]);
    }
}