const router = require('express').Router();

router.get('/podcast/upload', (request, response) => {
	// TODO: response: podcast upload form
});

router.get('/podcast/:username/:title', (request, response) => {
	// TODO: response: podcast overview
});

router.get('/podcast/:username/:title/edit', (request, response) => {
	// TODO: response: podcast upload form
});

module.exports = router;