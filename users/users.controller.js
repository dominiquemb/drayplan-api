const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const jwt = require('jsonwebtoken');
const config = require('config.json');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.post('/verify', verify);
router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

async function verify(req, res, next) {
     const { token } = req.body;
     try {   
            await jwt.verify(token, new Buffer(config.secret, 'base64'), function(err, decoded) {
                if (err && !decoded) {
                        throw err;
                }
            });

	    return res.json({ success: true});
    } catch(err) {
        return res.status(400).json({ error: err });
    }
}

function register(req, res, next) {
    userService.register(req.body)
        .then(user => {
		console.log('controller register');
		console.log(user);
		if (user) {
			console.log('user');
			console.log(user);
			res.json(user);
		} else {
			res.status(400).json({ message: 'Unable to create new user' })
		}
	})
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}
