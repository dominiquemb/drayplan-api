const express = require('express');
const router = express.Router();

const { Pool } = require('pg');

// routes
router.get('/get', getRouters); // TODO add jwt auth middleware

module.exports = router;

// TODO: move to .env/config & remove from repo before prod deploy
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cera',
    password: 'postgres',
    port: 5432,
});

function getRouters(req, res, next) {
    userId = 1 // TODO fetch userId from verified jwt
    pool
        .query('SELECT * FROM provisioned_routers WHERE user_id = $1', [userId])
        .then(pgres => res.status(200).json(pgres.rows))
        .catch(err => console.log(err))

}