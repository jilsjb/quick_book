const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log('started');
})


app.get('/', (req, res) => {
  res
  .json({
    'name': 'jils',
    'age': '31'
  })
  .status(200)
})