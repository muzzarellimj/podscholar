const router = require('express').Router();

const siteWebRoute = require('./site/site.web.route');
const policyWebRoute = require('./policy/policy.web.route');
const browseWebRoute = require('./browse/browse.web.route');
const browseApiRoute = require('./browse/browse.api.route');
const searchWebRoute = require('./search/search.web.route');
const searchApiRoute = require('./search/search.api.route');
const authWebRoute = require('./auth/auth.web.route');
const authApiRoute = require('./auth/auth.api.route');

router.use(siteWebRoute, policyWebRoute);
router.use(browseWebRoute, browseApiRoute);
router.use(searchWebRoute, searchApiRoute);
router.use(authWebRoute, authApiRoute);

module.exports = router;