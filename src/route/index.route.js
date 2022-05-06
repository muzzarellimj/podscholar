const router = require('express').Router();

const siteWebRoute = require('./site/site.web.route');
const policyWebRoute = require('./policy/policy.web.route');
const browseWebRoute = require('./browse/browse.web.route');
const browseApiRoute = require('./browse/browse.api.route');
const searchWebRoute = require('./search/search.web.route');
const searchApiRoute = require('./search/search.api.route');
const authWebRoute = require('./auth/auth.web.route');
const authApiRoute = require('./auth/auth.api.route');
const accountWebRoute = require('./account/account.web.route');
const accountApiRoute = require('./account/account.api.route');
const userWebRoute = require('./user/user.web.route');
const userApiRoute = require('./user/user.api.route');
const podcastWebRoute = require('./podcast/podcast.web.route');
const podcastApiRoute = require('./podcast/podcast.api.route');
const curateApiRoute = require('./curate/curate.api.route');

router.use(siteWebRoute, policyWebRoute);
router.use(browseWebRoute, browseApiRoute);
router.use(searchWebRoute, searchApiRoute);
router.use(authWebRoute, authApiRoute);
router.use(accountWebRoute, accountApiRoute);
router.use(userWebRoute, userApiRoute);
router.use(podcastWebRoute, podcastApiRoute);
router.use(curateApiRoute);

module.exports = router;