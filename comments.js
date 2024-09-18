// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create a list of comments
const comments = [
    {message: 'Hello'},
    {message: 'Hi'},
    {message: 'Bye'}
];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Listen to port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});