// create web server
// create a route with a get method
// create a route with a post method
// create a route with a delete method
// create a route with a put method

const express = require('express');
const app = express();
const comments = require('./comments');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id, 1);
  res.json(comments);
});

app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  comments[id] = newComment;
  res.json(newComment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});