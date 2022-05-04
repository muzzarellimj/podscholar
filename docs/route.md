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
beneath, each redirecting to a [targeted search route](#get-apisearchtypevalue) wherein `:type` is _category_ and
`:value` is the sub-discipline.

#### Browse by Creator at `/browse/creator`

A creator index listing every existing creator as a selectable option that redirects to a
[targeted search route](#get-apisearchtypevalue) wherein `:type` is _creator_ and `:value` is the selected creator.

#### Browse by Keyword at `/browse/keyword`

A keyword index listing every existing keyword as a selectable option that redirects to a
[targeted search route](#get-apisearchtypevalue) wherein `:type` is _keyword_ and `:value` is the selected keyword.

### API

#### GET `/api/browse/category`

Retrieve a list of scientific disciplines and sub-disciplines and the total number of podcasts belonging to each.

#### GET `/api/browse/creator`

Retrieve a list of all existing creators and the total number of podcasts each creator has published.

#### GET `/api/browse/keyword`

Retrieve a list of all existing keywords and the total number of podcasts belonging to each.

## Search

### Web

#### Search at `/search/...`

A page containing a podcast feed of content that matches the provided arguments, which can either be decided within the 
[generic search route](#get-apisearchvalue) or provided directly in a [targeted search route](#get-apisearchtypevalue).

### API

#### GET `/api/search/recent`

Retrieve a configurable number of the most recent podcasts published without category, creator, or keyword limitation.

#### GET `/api/search/recent/:count`

Retrieve `:count` of the most recent podcasts published without category, creator, or keyword limitation.

#### GET `/api/search/:value`

A generic search endpoint meant to serve as a form of rerouting middleware containing a `:value` argument that will be
parsed and redirected to `/api/search/:type/:value` wherein `:type` is the most appropriate type limit based on the 
provided `:value`, and `:value` is an approximation of the provided `:value` to match a common search schema. For 
example, if the endpoint `/api/search/nicholas%20caporusso` is reached, the client would be rerouted to 
`/api/search/creator/nicholascaporusso`.

#### GET `/api/search/:value/:count`

A generic search endpoint meant to serve as a form of rerouting middleware containing a `:value` and `:count` argument 
that will be parsed and redirected to `/api/search/:type/:value/:count` wherein `:type` is the most appropriate type 
limit based on the provided `:value`, `:value` is an approximation of the provided `:value` to match a common search 
schema, and `:count` is number of podcast content to return. For example, if the endpoint 
`/api/search/nicholas%20caporusso/15` is reached, the client would be rerouted to 
`/api/search/creator/nicholascaporusso/15`.

#### GET `/api/search/:type/:value`

Retrieve a configurable number of podcasts matching the provided `:type` and `:value` arguments. For example, 
`/api/search/category/computer-science` would retrieve a list of published podcasts of category _computer science_.

#### GET `/api/search/:type/:value/:count`

Retrieve `:count` podcasts matching the provided `:type` and `:value` arguments. For example, 
`/api/search/keyword/ieee/13` would retrieve a list of thirteen published podcasts containing the keyword _ieee_. 

#### GET `/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue`

Retrieve a configurable number of podcasts matching both the provided `:primaryType` and `:primaryValue` arguments and
`:secondaryType` and `:secondaryValue` arguments. For example, `/api/search/category/computer-science/keyword/ieee`
would retrieve a list of published podcasts of category _computer science_  <ins>and</ins> containing the keyword 
_ieee_.

#### GET `/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue/:count`

Retrieve `:count` podcasts matching both the provided `:primaryType` and `:primaryValue` arguments and `:secondaryType` 
and `:secondaryValue` arguments. For example, `/api/search/category/computer-science/keyword/ieee/7` would retrieve a 
list of seven published podcasts of category _computer science_ <ins>and</ins> containing the keyword _ieee_.

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