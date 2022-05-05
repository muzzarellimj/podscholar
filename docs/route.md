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

## Authentication

### Web

#### Register at `/register`

A page containing a registration form which will be validated both client-side and server-side and prompt an 
[account registration request](#post-apiauthregister).

#### Login at `/login`

A page containing a login form which will be validated both client-side and server-side and prompt a 
[login validation request](#post-apiauthlogin).

#### Authenticate at `/authenticate`

A page containing the result of an [account authentication request](#post-apiauthauthenticate), either marking a 
successful response or defining the issue(s) that occurred and how to resolve them.

#### Account Recovery at `/recover`

A page containing an account recovery form which will be validated both client-side and server-side and prompt an 
[account recovery request](#get-apiauthrecover).

### API

#### POST `/api/auth/register`

Validate entered account and profile credentials and insert a temporary user document in collection `stage`.

#### POST `/api/auth/authenticate`

Validate an account stored as a temporary user document in the `stage` database collection with an authentication token
and migrate the temporary user document in collection `stage` to a permanent user document in collection `primary`. 
Assuming this request is successful and the user document is migrated, a call to 
[delete the temporary user document](#delete-apiauthauthenticate) is triggered.

#### DELETE `/api/auth/authenticate`

Following a successful [migration of a temporary user document](#post-apiauthauthenticate) in collection `stage` to a 
permanent user document in collection `primary`, delete the temporary user document.

#### POST `/api/auth/login`

Validate entered account credentials against stored (and hashed) account credentials. Assuming both credentials match, 
authenticate the user by providing a token; if credentials do not match, refuse to authenticate the user and prompt
another attempt.

#### GET `/api/auth/recover`

Initiate the account recovery process, mark the account as invalid to prevent usage until the issue is resolved, and
trigger an email to the registered email address.

#### POST `/api/auth/recover`

Validate an invalid account - one marked as invalid as a result of an account recovery request - with an authentication
token and, assuming the request is successful, remove the mark of invalidation.

## Account

### Web

#### Creator Verification at `/account/verify`

A page containing a creator verification form which will be validated both client-side and server-side and prompt a
[creator verification form](#post-apiaccountverify).

#### Account Edit at `/account/edit/:section`

A page containing tabular account sections pertaining to the general account, user or creator profile, or application
preferences, all of which can be edited. The provided `:section` argument will dictate the section that is displayed.

### API

#### POST `/api/account/verify`

Validate entered creator credentials internally (e.g., educational email address) and/or externally 
(e.g., [ORCID](https://orcid.org/)). Assuming a successful validation response, insert a creator document and link it 
to the user document.

#### GET `/api/account`

Retrieve a user and, should it exist, creator document via an authentication token.

#### PATCH `/api/account`

Update a user and, should it exist, creator document with the provided credentials.

#### PATCH `/api/account/:attribute/:value`

Update a user or creator document attribute with the provided `:attribute` and `:value` arguments.

## User

### Web

#### User Overview at `/user/:username`

A page containing a profile overview of a user and, if applicable, creator. A user overview should include a username,
avatar, and curated content including subscribed categories, creators, and keywords.

### API

#### GET `/api/user/:username`

Retrieve all public-facing user and, if applicable, creator profile content of the user matching `:username`.

#### GET `/api/user/:username/attribute/:value`

Retrieve a public-facing user or creator profile attribute of the user matching `:username`.

#### GET `/api/user/:username/curation/bookmark`

Retrieve a list of podcasts that the user matching `:username` has bookmarked.

#### GET `/api/user/:username/curation/creator`

Retrieve a list of creators that the user matching `:username` has followed.

#### GET `/api/user/:username/curation/like`

Retrieve a list of podcasts that the user matching `:username` has liked.

## Podcast

### Web

##### Podcast Upload at `/podcast/upload`

A page containing a podcast upload form which will be validated both client-side and server-side and prompt a
[podcast upload request](#post-apipodcastupload).

##### Podcast Overview at `/podcast/:username/:title`

A page containing a podcast overview including details pertaining to the podcast publication, source publication, audio 
content itself, and curation metrics. Within this route, `:username` is that of the creator and `:title` is a 
compression and hyphenation of the podcast title.

##### Podcast Edit at `/podcast/:username/:title/edit`

A page containing all podcast details in input fields to be edited.

### API

#### GET `/api/podcast/:username/:title`

Retrieve the podcast document matching `:username`, that of the creator, and `:title`, the compressed and hyphenated
podcast title. Within this route, a call is also made to retrieve the related user and creator documents to populate
creator details.

#### GET `/api/podcast/:username/:title/:attribute`

Retrieve the attribute matching argument `:attribute` within the podcast document matching `:username`, that of the 
creator, and `:title`, the compressed and hyphenated title.

#### POST `/api/podcast/upload`

Validate entered podcast details and insert a podcast document in collection `primary`.

#### PATCH `/api/podcast/:username/:title`

Validate and modify podcast details.

#### DELETE `/api/podcast/:username/:title`

Delete the content of a podcast and replace with a placeholder message indicating that the podcast was removed.

## Curation

### API

##### PATCH `/api/curate/category/:value`

Subscribe to or unsubscribe from the category matching argument `:value`.

##### PATCH `/api/curate/creator/:username`

Subscribe to or unsubscribe from the creator matching argument `:username`.

##### PATCH `/api/curate/keyword/:value`

Subscribe to or unsubscribe from the keyword matching argument `:value`.

##### PATCH `/api/curate/podcast/bookmark/:username/:title`

Bookmark or remove a bookmark from the podcast matching the creator, argument `:username`, and title, argument `:title`.

##### PATCH `/api/curate/podcast/like/:username/:title`

Like or remove a like from the podcast matching the creator, argument `:username`, and title, argument `:title`.