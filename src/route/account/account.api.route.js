const router = require('express').Router();

router.get('/api/account', (request, response) => {
	// TODO: response: user and, if applicable, creator document content
});

router.patch('/api/account', (request, response) => {
	// TODO: response: modify all user and, if applicable, creator document content
});

router.delete('/api/account', (request, response) => {
	// TODO: response: delete user and, if applicable, creator document and replace with placeholder message
});

router.get('/api/account/verify', (request, response) => {
	// TODO: response: validate credentials and send creator verification authentication token
});

router.post('/api/account/verify', (request, response) => {
	// TODO: response: validate authentication token and further credentials, insert a creator document
});

router.patch('/api/account/verify', (request, response) => {
	// TODO: response: update user document to include creator id
});

module.exports = router;