const {render} = require("../../utility/mustache.utility");
const router = require('express').Router();

router.get('/register', (request, response) => {
	response.status(200).send(render('src/route/auth/view/register.html', {
		userProfileContent: response.locals.userProfileContent
	}));
});

router.get('/authenticate', (request, response) => {
	// TODO: response: account authentication
});

router.get('/login', (request, response) => {
	response.status(200).send(render('src/route/auth/view/login.html', {
		userProfileContent: response.locals.userProfileContent
	}));
});

router.get('/recover', (request, response) => {
	response.status(200).send(render('src/route/auth/view/recover.html', {
		userProfileContent: response.locals.userProfileContent
	}));
});

module.exports = router;