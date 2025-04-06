const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const apiRoutes = require('./routes/api');
const healthRoutes = require('./routes/health');

app.use('/api', apiRoutes);
app.use('/health', healthRoutes);

// module.exports.handler = serverless(app);
module.exports = serverless(app);


// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
