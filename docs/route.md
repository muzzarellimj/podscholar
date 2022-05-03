# PodScholar Route Strategies

## Site

WEB
Home (anon, auth)
Pricing and FAQ
About
Contact
Terms and Conditions
Privacy Policy

## Browse

WEB (each browse page reroutes to /search/[type]/[value] on click)
Category (sub-category index similar to how we designed, but separated by category heading)
Keyword
Creator

API
GET /category - retrieve a list of scientific disciplines and total number of related podcasts
GET /keyword - retrieve a list of keywords and total number of related podcasts

## Search

WEB 
Search (/search/[type]/[value] where type could be title, creator, category, keyword, or date)

API
GET /search/recent - retrieve constant number of recent podcasts
GET /search/recent/:count - retrieve :count most recent podcasts in no particular category
GET /search/:value - pass through search middleware to format as /search/:type/:value
GET /search/:value/:count - pass through search middleware to format as /search/:type/:value/:count
GET /search/:type/:value - retrieve constant number of most recent podcasts matching parameter
GET /search/:type/:value/:count - retrieve :count most recent podcasts matching parameter
GET /search/:primaryType/:primaryValue/:secondaryType/:secondaryValue - retrieve constant number of most recent podcasts matching parameter
GET /search/:primaryType/:primaryValue/:secondaryType/:secondaryValue/:count - retrieve :count most recent podcasts matching parameter

## Account

WEB
Sign-up
Sign-in
Authenticate
Creator Verify
Recover Password
Account Edit

API
GET /account - retrieve account details (usually for editing)
PATCH /account - modify account details
POST /account/register - register a new account
POST /account/login - login to an existing account
POST /account/authenticate - verify email of an existing account
POST /account/verify - verify creator status of an existing account
POST /account/recover - recover existing account

## Podcast

WEB
Podcast Detail
Upload
Edit

API
POST /podcast - publish a podcast
GET /podcast/:creator/:title - retrieve details of a podcast
GET /podcast/:creator/:title/:attribute - retrieve :attribute of a podcast
PATCH /podcast/:creator/:title - modify details of a podcast
DELETE /podcast/:creator/:title - delete podcast and replace with placeholder deleted text
PATCH /podcast/:creator/:title/interact/bookmark - bookmark or remove bookmark from podcast
PATCH /podcast/:creator/:title/interact/like - like or remove like from podcast

## User

WEB
User Detail

API
GET /user/:username -  retrieve user details
GET /user/:username/:attribute - retrieve :attribute of user
PATCH /user/:username/interact/follow - follow or unfollow user
GET /user/:username/podcast/creator - retrieve all podcasts created by a user
GET /user/:username/podcast/bookmark - retrieve all podcasts bookmarked by a user
GET /user/:username/podcast/like - retrieve all podcasts liked by a user