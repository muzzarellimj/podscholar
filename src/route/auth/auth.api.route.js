const router = require('express').Router();

router.post('/api/auth/register', (request, response) => {
	// TODO: response: insert temporary user (and creator) document, send authentication token
});

router.post('/api/auth/authenticate', (request, response) => {
	// TODO: response: validate authentication token, insert permanent document
});

router.delete('/api/auth/authenticate', (request, response) => {
	// TODO: response: delete temporary user (and creator) document
});

router.post('/api/auth/login', (request, response) => {
	// TODO: response: validate user credentials and store authentication token
});

router.get('/api/auth/recover', (request, response) => {
	// TODO: response: send email containing generated account recovery authentication token
});

router.patch('/api/auth/recover', (request, response) => {
	// TODO: response: validate account recovery authentication token, update password
});

module.exports = router;