const express = require('express');
const port = 3000;

const ideas = [
  {
    id: 1,
    text: 'Positive Newsletter, a newslettee that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2026-01-02',
  },
  {
    id: 2,
    text: 'Milk bottles that turn a different colour as the best before date approaches',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2025-11-12',
  },
  {
    id: 3,
    text: 'ATM location app that lets you know where the nearest ATM is and if it is working',
    tag: 'Software',
    username: 'BuckyBarnes',
    date: '2025-01-05',
  },
];

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
});

app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
