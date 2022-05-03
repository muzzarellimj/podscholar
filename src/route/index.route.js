const router = require('express').Router();

const siteWebRoute = require('./site/site.web.route');

router.use(siteWebRoute);

module.exports = router;