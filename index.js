'use strict';

const express = require('express');

const app = express();

app.use(express.static('./public'));

app.get(/.*/, (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600');
  res.send(new Date().toISOString());
});

app.listen(3000);

console.log('Server listening on port 3000 ...');
