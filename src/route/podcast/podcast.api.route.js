const router = require('express').Router();

router.post('/api/podcast/upload', (request, response) => {
	// TODO: response: validate podcast and source publication details and insert a podcast document
});

router.get('/api/podcast/:username/:title', (request, response) => {
	// TODO: response: all podcast overview content
});

router.patch('/api/podcast/:username/:title', (request, response) => {
	// TODO: response: modify all podcast document content
});

router.delete('/api/podcast/:username/:title', (request, response) => {
	// TODO: response: delete a podcast document content and replace with a placeholder message
});

module.exports = router;