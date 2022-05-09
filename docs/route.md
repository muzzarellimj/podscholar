# PodScholar Route Strategy

## Site

Routes pertaining to general site pages accessible via the navigation menu (excluding [browse](#browse)) and existing 
independent of section.

### WEB

##### Home at `/`

A site index to include a recent podcast feed and, if authenticated, a randomly chosen creator feed, category feed, and 
keyword feed.

##### Pricing and FAQ at `/faq`

A page containing both a pricing section with tier feature comparison and a FAQ section including information pertaining
to creator verification, podcast upload, etc.

##### About at `/about`

A page containing a description and mission statement of the application.

##### Contact at `/contact`

A page containing a contact form with standard input: first and last name, email address, topic, and message.

## Policy

Routes pertaining to application policies - terms of use, privacy policy, etc.

### WEB

##### Privacy Policy at `/policy/privacy`

A page containing the user data privacy policy and related resources.

##### Terms of Use at `/policy/use`

A page containing the terms of application use.

## Browse

Routes pertaining to the organisation and display of browsable content.

### WEB

##### Browse by Category at `/browse/category`

A category index listing each scientific discipline as a header with related sub-disciplines as selectable options
beneath, each rerouting to a [targeted search](#get-apisearchtypevalue) wherein `:type` is _category_ and `:value` is 
the selected sub-discipline.

##### Browse by Creator at `/browse/creator`

A creator index listing all existing creators as a selectable option that reroutes to a 
[targeted search](#get-apisearchtypevalue) wherein `:type` is _creator_ and `:value` is the selected creator.

##### Browse by Keyword at `/browse/keyword`

A keyword index listing all existing keywords as a selectable option that reroutes to a
[targeted search](#get-apisearchtypevalue) wherein `:type` is _keyword_ and `:value` is the selected keyword.

### API

##### GET `/api/browse/category`

Retrieve all existing scientific sub-disciplines and the number of podcasts published beneath them.

##### GET `/api/browse/creator`

Retrieve all registered creators and the number of podcasts each has published.

##### GET `/api/browse/keyword`

Retrieve all existing keywords and the number of podcasts published beneath them.

## Search

Routes pertaining to the querying and filtering of podcasts.

### WEB

##### Search at `/search/:value`

A page containing a feed of podcasts that match the provided arguments within `:value`, which can either be decided 
within a [generic search route API call](#get-apisearchvalue) or provided explicitly within a 
[targeted search route API call](#get-apisearchtypevalue).

### API

##### GET `/api/search/recent`

Retrieve a configurable number of the most recent podcasts published, regardless of category, creator, or keyword.

##### GET `/api/search/recent/:count`

Retrieve `:count` of the most recent podcasts published, regardless of category, creator, or keyword.

##### GET `/api/search/:value`

A generic search endpoint meant to function as middleware to reroute to a 
[targeted search route API call](#get-apisearchtypevalue) post-processing. The provided argument `:value` is parsed to
choose the most likely primary limitation type, marked as `:type` in the rerouted call, and form a more appropriate 
search value, marked as `:value` in the rerouted call. For example, if a call is made to 
`/api/search/nicholas%20caporusso`, argument `:value` is evaluated and a match to a creator with name 
_Nicholas Caporusso_ and username _nicholas caporusso_ is found, then rerouting to 
`api/search/creator/nicholascaporusso`.

##### GET `/api/search/:value/:count`

A generic search endpoint meant to function as middleware to reroute to a
[length-limited targeted search route API call](#get-apisearchtypevaluecount) post-processing. The provided 
argument `:value` is parsed to choose the most likely primary limitation type, marked as `:type` in the rerouted call, 
and form a more appropriate search value, marked as `:value` in the rerouted call. The provided argument `:count` is 
provided as an argument in the rerouted call but is otherwise ignored. For example, if a call is made to
`/api/search/nicholas%20caporusso/10`, argument `:value` is evaluated and a match to a creator with name
_Nicholas Caporusso_ and username _nicholas caporusso_ is found, then rerouting to
`api/search/creator/nicholascaporusso/10`.

##### GET `/api/search/:type/:value`

Retrieve a configurable number of podcasts matching the limitation of provided arguments `:type` and `:value`. For 
example, a call made to `/api/search/category/computer-science` would retrieve a configurable number of podcasts 
published beneath the _computer science_ scientific sub-discipline.

##### GET `/api/search/:type/:value/:count`

Retrieve `:count` podcasts matching the limitation of provided arguments `:type` and `:value`. For example, a call made 
to `/api/search/category/computer-science/10` would retrieve ten podcasts published beneath the _computer science_ 
scientific sub-discipline.

##### GET `/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue`

Retrieve a configurable number of podcasts matching the limitations of provided arguments `:primaryType` and 
`:primaryValue` _and_ `:secondaryType` and `:secondaryValue`. For example, a call made to 
`/api/search/keyword/ieee/date/2020-01-01` would retrieve a configurable number of podcasts published including keyword
_ieee_ and published after date _January 1, 2020_.

##### GET `/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue/:count`

Retrieve `:count` podcasts matching the limitations of provided arguments `:primaryType` and `:primaryValue` _and_ 
`:secondaryType` and `:secondaryValue`. For example, a call made to `/api/search/keyword/ieee/date/2020-01-01/12` would 
retrieve ten podcasts published including keyword _ieee_ and published after date _January 1, 2020_.

##### GET `/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue/:tertiaryType/:tertiaryValue`

Retrieve a configurable number of podcasts matching the limitations of provided arguments `:primaryType` and 
`:primaryValue`, `:secondaryType` and `:secondaryValue`, and `:tertiaryType` and `:tertiaryValue`. For example, a call
made to `/api/search/keyword/ieee/date/2020-01-01/creator/nicholascaporusso` would retrieve a configurable number of 
podcasts published including keyword _ieee_, published after _January 1, 2020_, and published by creator _Nicholas 
Caporusso_.

##### GET `/api/search/:primaryType/:primaryValue/:secondaryType/:secondaryValue/:tertiaryType/:tertiaryValue/:count`

Retrieve `:count` podcasts matching the limitations of provided arguments `:primaryType` and `:primaryValue`, 
`:secondaryType` and `:secondaryValue`, and `:tertiaryType` and `:tertiaryValue`. For example, a call made to 
`/api/search/keyword/ieee/date/2020-01-01/creator/nicholascaporusso/3` would retrieve three podcasts published including 
keyword _ieee_, published after _January 1, 2020_, and published by creator _Nicholas Caporusso_.

## Authentication

Routes pertaining to account authentication, including registration, validation, and recovery.

### WEB

##### Register at `/register`

A page containing an account registration form which will be validated both client-side and server-side and prompt an
[account registration request](#post-apiauthregister).

##### Authenticate at `/authenticate`

A page containing the result of an [account authentication request](#post-apiauthauthenticate), either noting a
successful response or providing a description of the issue preventing authentication.

##### Login at `/login`

A page containing a login form which will be validated both client-side and server-side and prompt a 
[login validation request](#post-apiauthlogin).

##### Recover at `/recover`

A page containing an account recovery form which will be validated both client-side and server-side and prompt an
[account recovery request](#get-apiauthrecover).

### API

##### POST `/api/auth/register`

Validate entered account and profile credentials and insert a staged, temporary user and, if applicable, creator
document. Assuming a successful response, send a generated account authentication token to the entered email address.

##### POST `/api/auth/authenticate`

Validate a staged, temporary user document with a generated account authentication token and insert the user and, if 
applicable, creator document to the permanent user and creator document collections. Assuming a successful response, 
indicating the documents exist permanently in another collection, trigger a 
[temporary document deletion API call](#delete-apiauthauthenticate).

##### DELETE `/api/auth/authenticate`

Following a successful response in an [account authentication API call](#post-apiauthauthenticate), delete the temporary
user and, if applicable, creator documents.

##### POST `/api/auth/login`

Validate entered account credentials against stored account credentials. Assuming the entered email and hashed password
match the stored email and password, authenticate the user and store an authentication token; if the entered credentials
do not match the stored credentials, prompt another attempt to enter credentials.

##### GET `/api/auth/recover`

Initialise the account recovery process and send an email containing a generated account recovery authentication token
to the registered email address.

##### PATCH `/api/auth/recover`

Validate an account amidst the recovery process with the provided account recovery authentication token and update the 
password with the hashed entered password.

## Account

Routes pertaining to account management.

### WEB

##### Account Edit at `/account/edit/:section`

A page containing account details separated into tabular sections, labeled with argument `/:section`, each pertaining to
an area of the account - general account credentials, user profile, creator profile, and application preferences.

##### Creator Verification at `/account/verify`

A page containing a post-registration creator verification form which will be validated both client-side and server-side
and prompt a [creator verification request](#get-apiaccountverify).

### API

##### GET `/api/account`

Retrieve the user and, if applicable, creator document content.

##### PATCH `/api/account`

Modify all user and, if applicable, creator document content.

##### DELETE `/api/account`

Delete the content of a user and, if applicable, creator document and replace it with a placeholder message indicating 
that the content was removed.

##### GET `/api/account/verify`

Validate the entered educational or otherwise institutional email address and send a generated creator verification 
authentication token to initialise the creator verification process.

##### POST `/api/account/verify`

Validate an account amidst the verification process with the provided creator verification authentication token, 
validate further required and entered credentials, and insert a document in the creator database collection. Assuming
a successful response, trigger a [user-creator profile link API call](#patch-apiaccountverify).

##### PATCH `/api/account/verify`

Following a successful response in a [creator verification API call](#post-apiaccountverify), update the user document
of the newly verified creator to include the generated creator identification number.

## User

Routes pertaining to the viewing and management of user profiles.

### WEB

##### User Overview at `/user/:username`

A page containing a profile overview of a user, including creator profile details, if applicable. A user overview would
include a username, avatar, and podcast curation. Assuming the user is also a creator, this page would also display
position and institution, curation metrics, and published podcasts.

### API

##### GET `/api/user/:username`

Retrieve all public-facing user and, if applicable, creator profile content of the user matching argument `:username`.

##### GET `/api/user/:username/:section/:attribute`

Retrieve a public-facing user or creator profile attribute matching argument `:attribute`, existing within the section 
matching `:section`, and of the user matching argument `:username`. For example, a call made to 
`/api/user/nicholascaporusso/curation/creator` would retrieve the creators that user _@nicholascaporusso_ subscribe to.

## Podcast

Routes pertaining to the uploading, viewing, and management of published podcasts.

### WEB

##### Podcast Upload at `/podcast/upload`

A page containing a podcast upload form which will be validated both client-side and server-side and prompt a 
[podcast upload request](#post-apipodcastupload).

##### Podcast Overview at `/podcast/:username/:title`

A page containing a podcast overview including details pertaining to the podcast publication, source publication, audio
content, and curation metrics.

##### Podcast Edit at `/podcast/:username/:title/:edit`

A page containing a podcast edit form wherein all podcast details both displayed client-side and stored server-side can 
be modified.

### API

##### POST `/api/podcast/upload`

Validate entered podcast and source publication details and insert a document in the podcast database collection.

##### GET `/api/podcast/:username/:title`

Retrieve all public-facing podcast overview content of the podcast with a title matching argument `:title` and published
by the creator matching argument `:username`.

##### PATCH `/api/podcast/:username/:title`

Modify all podcast document content of the podcast with a title matching argument `:title` and published by the creator
matching argument `:username`.

##### DELETE `/api/podcast/:username/:title`

Delete the content of a podcast document of the podcast with a title matching argument `:title` and published by the 
creator matching argument `:username` and replace it with a placeholder message indicating that the content was removed.

## Curation

Routes pertaining to the curation of media content.

### API

##### PATCH `/api/curate/category/:value`

Subscribe to or unsubscribe from the category matching argument `:value`.

##### PATCH `/api/curate/creator/:username`

Subscribe to or unsubscribe from the creator matching argument `:username`.

##### PATCH `/api/curate/keyword/:value`

Subscribe to or unsubscribe from the keyword matching argument `:value`.

##### PATCH `/api/curate/podcast/bookmark/:username/:title`

Bookmark or remove a bookmark from the podcast with a title matching argument `:title` and published by the creator 
matching argument `:username`.

##### PATCH `/api/curate/podcast/like/:username/:title`

Like or remove a like from the podcast with a title matching argument `:title` and published by the creator matching 
argument `:username`.