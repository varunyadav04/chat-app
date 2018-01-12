const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');

var app = express();
var port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Connect to ${port}`);
});
