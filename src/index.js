const express = require('express');
const app = express();

const authController = require('./controllers/auth');

app.use('/auth', authController);

app.get('/', (req, res) => {
    return res.json('API running...');
});

app.listen(3001, () => {
    console.log('Listening on por 3001');
});
