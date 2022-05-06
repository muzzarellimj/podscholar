const router = require('express').Router();

router.get('/api/search/recent', (request, response) => {
	// TODO: response: configurable number of the most recent podcasts
});

router.get('/api/search/recent/:count', (request, response) => {
	// TODO: response: :count of the most recent podcasts
});

router.get('/api/search/:value', (request, response) => {
	// TODO: generic search endpoint, reroute to targeted search api call
});

router.get('/api/search/:value/:count', (request, response) => {
	// TODO: generic length-limited search endpoint, reroute to length-limited targeted search api call
});

router.get('/api/search/:type/:value', (request, response) => {
	// TODO: response: configurable number of podcasts matching arguments :type and :value
});

router.get('/api/search/:type/:value/:count', (request, response) => {
	// TODO: response: :count podcasts matching arguments :type and :value
});

router.get('/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue', (request, response) => {
	// TODO: response: configurable number of podcasts matching arguments :primaryType and :primaryValue and
	//  :secondaryType and :secondaryValue
});

router.get('/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue/:count', (request, response) => {
	// TODO: response: :count podcasts matching arguments :primaryType and :primaryValue and :secondaryType and
	//  :secondaryValue
});

module.exports = router;