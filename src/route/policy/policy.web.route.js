const router = require('express').Router();
const { render } = require("../../utility/mustache.utility");

router.get('/policy/privacy', (request, response) => {
	response.status(200).send(render('src/route/policy/view/privacy.html', {
		userProfileContent: response.locals.userProfileContent
	}));
});

router.get('/policy/use', (request, response) => {
	// TODO: response: application use policy (terms of use)
});

module.exports = router;