# PodScholar Route Strategies

## Site

### Web

#### Home at `/`

Site index to include a recent feed and, if authenticated, a randomly chosen creator feed, category feed, and keyword
feed.

#### Pricing and FAQ at `/faq`

A single page containing both a pricing section with feature comparison and a FAQ section with commonly asked questions; 
e.g., creator registration process, podcast upload process, etc.

#### About at `/about`

A static page containing the description and mission of the application.

#### Contact at `/contact`

A static page containing a contact form with standard fields: name, email address, topic, and message.

#### Terms and Conditions at `/tac`

A static page containing the terms and conditions of application use.

#### Privacy Policy at `/privacy`

A static page containing the user data privacy policy.

## Browse

### Web

#### Browse by Category at `/browse/category`

A category index listing each scientific discipline as a header with related sub-discipline as selectable options 
beneath, each redirecting to a [primary search](#primary-search-at-searchtypevalue) wherein `:type` is `category` and
`:value` is the sub-discipline.

#### Browse by Creator at `/browse/creator`

A creator index listing every existing creator as a selectable option that redirects to a
[primary search](#primary-search-at-searchtypevalue) wherein `:type` is `creator` and `:value` is the selected creator.

#### Browse by Keyword at `/browse/keyword`

A keyword index listing every existing keyword as a selectable option that redirects to a 
[primary search](#primary-search-at-searchtypevalue) wherein `:type` is `keyword` and `:value` is the selected keyword.

### API

#### GET `/api/browse/category`

Retrieve a list of scientific disciplines and sub-disciplines and the total number of podcasts belonging to each.

#### GET `/api/browse/creator`

Retrieve a list of all existing creators and the total number of podcasts each creator has published.

#### GET `/api/browse/keyword`

Retrieve a list of all existing keywords and the total number of podcasts belonging to each.

## Search

WEB 
Search (/search/[type]/[value] where type could be title, creator, category, keyword, or date)

### API

#### Primary Search at `/search/:type/:value`

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