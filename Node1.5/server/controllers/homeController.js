// Models
const homeModel = require('../models/homeModel.js');

module.exports = {
    home: async (req, res) => {
        const posts = await homeModel.getPosts();
    
        // res.render('home.ejs', {posts: posts});
        res.json({posts:posts});
    }
}