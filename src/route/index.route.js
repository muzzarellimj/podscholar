const router = require('express').Router();

const siteWebRoute = require('./site/site.web.route');
const policyWebRoute = require('./policy/policy.web.route');
const browseWebRoute = require('./browse/browse.web.route');
const browseApiRoute = require('./browse/browse.api.route');

router.use(siteWebRoute, policyWebRoute);
router.use(browseWebRoute, browseApiRoute);

module.exports = router;