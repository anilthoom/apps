const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://anilt:MTkBiEytM4tj21YI@cluster0.hvudy.mongodb.net?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to mongo db');
    })
    .catch(() => {
        console.log('Connection failed!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept'
        );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.get('/api/posts', (req, res, next)=> {
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