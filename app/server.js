const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const server = process.env.SERVER

app.get('/', (req, res) => {
  res.send(`Hello from ${server}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
