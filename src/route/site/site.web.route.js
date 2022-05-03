const router = require('express').Router();

router.get('/', (request, response) => {
	// TODO: response: home page
});

router.get('/about', (request, response) => {
	// TODO: response: about page
});

router.get('/faq', (request, response) => {
	// TODO: response: pricing and faq page
});

router.get('/contact', (request, response) => {
	// TODO: response: contact page
});

router.get('/tac', (request, response) => {
	// TODO: response: terms and conditions page
});

router.get('/privacy', (request, response) => {
	// TODO: response: privacy policy
});

module.exports = router;