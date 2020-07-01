const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const router = express.Router();

router.get('/sign-in', (req, res) => {
    return res.json('Sing in!');
});

router.get('/sign-up', async (req, res) => {

    const email = 'gs.montanher@gmail.com';
    const password = '123456';

    const hash = bcrypt.hashSync(password, 10);
    console.log(hash);
    const result = await Account.create({email , password: hash});

    console.log(result);

    return res.json(result);
});

module.exports = router;