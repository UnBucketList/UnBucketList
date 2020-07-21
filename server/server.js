const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/blogs', (req, res) => {
  res.json({ blogs: 'hit me' });
});

app.listen(PORT, () => {
  console.log('Server listening on port 3000');
});
