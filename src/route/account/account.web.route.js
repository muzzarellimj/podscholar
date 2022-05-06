const router = require('express').Router();

router.get('/account/edit/:section', (request, response) => {
	// TODO: response: page containing editable account details
});

router.get('/account/verify', (request, response) => {
	// TODO: response: post-registration creator verification form
});

module.exports = router;