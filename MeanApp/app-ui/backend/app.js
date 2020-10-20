const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next)=> {
    const posts = [
        { 
            id: 'fdsfs2093', 
            title: 'FIRST SERVER SIDE', 
            content: 'This is coming from server'
        },
        { 
            id: 'xxew23344', 
            title: 'SECOND SERVER SIDE', 
            content: 'This is ALSO coming from server'
        }
    ];
    res.status(200).json({
        message: 'Posts Fetched Successfully!',
        posts: posts
    });
});

module.exports = app;