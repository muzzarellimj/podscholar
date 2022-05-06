const router = require('express').Router();

router.patch('/api/curate/category/:value', (request, response) => {
	// TODO: response: subscribe or unsubscribe from a category
});

router.patch('/api/curate/creator/:username', (request, response) => {
	// TODO: response: subscribe or unsubscribe from a creator
});

router.patch('/api/curate/keyword/:value', (request, response) => {
	// TODO: response: subscribe or unsubscribe from a keyword
});

router.patch('/api/curate/podcast/bookmark/:username/:title', (request, response) => {
	// TODO: response: bookmark or remove bookmark from a podcast
});

router.patch('/api/curate/podcast/like/:username/:title', (request, response) => {
	// TODO: response: like or remove like from a podcast
});

module.exports = router;