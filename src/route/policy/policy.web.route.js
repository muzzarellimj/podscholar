const router = require('express').Router();
const { render } = require("../../utility/mustache.utility");

router.get('/policy/privacy', (request, response) => {
	response.status(200).send(render('src/route/policy/view/privacy.html', {
		userProfileContent: response.locals.userProfileContent
	}));
});

router.get('/policy/use', (request, response) => {
	response.status(200).send(render('src/route/policy/view/use.html', {
		userProfileContent: response.locals.userProfileContent
	}));
});

module.exports = router;