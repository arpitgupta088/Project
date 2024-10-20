const mongoose = require('mongoose');

let blogSchema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        reuired: true
    },

    author:{
        type: String,
        trim: true,
        reuired: true
    },

    comment:{
        type: String,
        trim: true,
        reuired: true
    },
})

let Blog = mongoose.model('Blog', blogSchema);
module.exports=Blog;