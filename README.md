# PodScholar

PodScholar is a content distribution platform meant to blend the consumption of traditional digital media and scholarly
research in a more casual, digestible medium: a podcast. This podcast should present research in a less formal, more
conversational tone, thus encouraging discussion between the researcher and the listener.

PodScholar is in active development and is meant to serve as the final assignment for ASE 220, Full Stack Application
Development, at Northern Kentucky University in Spring 2022. The development team consists of [Michael Muzzarelli](https://github.com/muzzarellimj),
[Robert Adams](https://github.com/adamsr15), and [Jyhdel Pamonag](https://github.com/jmlpamonag).

## Usage

To use PodScholar, clone this repository with `git clone https://github.com/muzzarellimj/podscholar.git`, navigate to
the root project directory, install the package and dependencies with `npm install`, and start the application in 
production mode with Node...

`npm run start`

...or in development mode with [nodemon](https://www.npmjs.com/package/nodemon)...

`npm run develop`

## Structure

PodScholar is structured to maintain the [single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle), 
meaning each module is only responsible for one component or function of the application. As such, our project structure
is as follows within the `src` directory:

- [configuration](src/configuration): semantic declarations to access environmental variables stored with [dotenv](https://github.com/motdotla/dotenv)
  to ease reference to them; e.g., call the database connection string URI with `database.configuration.uri` rather than
  with `process.env.DATABASE_CONNECTION_URI`.

- [database](src/database): root of all database-related modules including those that handle persistent database access,
  CRUD operations, [Mongoose](https://mongoosejs.com/) models, etc.

- [middleware](src/middleware): all [Express](https://expressjs.com/) middleware modules and functions including 
  authentication, logging, etc.

- [route](src/route): all [Express](https://expressjs.com/) routes and views, HTML or otherwise, organised in a 
  cascading structure similar to that of the URL address the router serves. For example, `podscholar.com/user/:id` 
  should rely on two routing modules: `src/route/user/user.web.route.js` to handle web route strategies, and
  `src/route/user/user.api.route.js` to handle API route strategies.

- [utility](src/utility): any miscellaneous utility modules and functions that may serve a variety of purposes and/or 
  are flexible enough to use in several unrelated modules.