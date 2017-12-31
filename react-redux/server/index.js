const express = require('express');

const app = express();

app.get('*', (req, res) => res.send('welcome back to express'));

app.listen(9001, () => console.log('long time no Node'));
