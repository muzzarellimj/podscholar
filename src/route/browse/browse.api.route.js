const router = require('express').Router();

router.get('/api/browse/category', (request, response) => {
	// TODO: response: all existing scientific sub-disciplines and the number of podcasts published beneath them
});

router.get('/api/browse/creator', (request, response) => {
	// TODO: response: all registered creators and the number of podcasts each has published
});

router.get('/api/browse/keyword', (request, response) => {
	// TODO: response: all existing keywords and the number of podcasts published beneath them
});

module.exports = router;