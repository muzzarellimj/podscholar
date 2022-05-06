const router = require('express').Router();

router.get('/register', (request, response) => {
	// TODO: response: registration form
});

router.get('/authenticate', (request, response) => {
	// TODO: response: account authentication
});

router.get('/login', (request, response) => {
	// TODO: response: login form
});

router.get('/recover', (request, response) => {
	// TODO: response: account recovery
});

module.exports = router;