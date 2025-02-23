const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
