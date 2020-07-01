const express = require('express');

const router = express.Router();

router.get('/sign-in', (req, res) => {
    return res.json('Sing in!');
});

router.get('/sign-up', (req, res) => {
    return res.json('Sing up!');
});

module.exports = router;