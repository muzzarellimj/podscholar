const router = require('express').Router();

router.get('/api/user/:username', (request, response) => {
	// TODO: response: all user and, if applicable, creator profile content
});

router.get('/api/user/:username/:section/:attribute', (request, response) => {
	// TODO: response: particular attribute value of user or creator profile
});

module.exports = router;