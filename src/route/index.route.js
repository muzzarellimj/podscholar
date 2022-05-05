const router = require('express').Router();

const siteWebRoute = require('./site/site.web.route');
const policyWebRoute = require('./policy/policy.web.route');

router.use(siteWebRoute, policyWebRoute);

module.exports = router;