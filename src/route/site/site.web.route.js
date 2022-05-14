const router = require('express').Router();
const { render } = require('../../utility/mustache.utility');
const { createFeed } = require('../../service/content/feed.service');

router.get('/', (request, response) => {
	const userProfileContent = (response.locals.authenticated === true) ?
		'<a class="nav-link" href="/register">Account</a>' :
		`<a class="nav-link" href="/register">Register<i class="bi bi-arrow-right ms-2"></i></a>`;

	response.status(200).send(render('src/route/site/view/index.html', {
		userProfileContent: userProfileContent,
		recentFeed: createFeed('recent', null, 'A glance at the most recent content published to PodScholar.')
	}));
});

router.get('/faq', (request, response) => {
	const userProfileContent = (response.locals.authenticated === true) ?
		'<a class="nav-link" href="/register">Account</a>' :
		`<a class="nav-link" href="/register">Register<i class="bi bi-arrow-right ms-2"></i></a>`;

	response.status(200).send(render('src/route/site/view/faq.html', {
		userProfileContent: userProfileContent
	}));
});

router.get('/about', (request, response) => {
	// TODO: response: about page
});

router.get('/contact', (request, response) => {
	// TODO: response: contact page
});

module.exports = router;