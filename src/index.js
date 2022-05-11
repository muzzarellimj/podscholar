require('dotenv').config();

const express = require('express');

const configuration = require('./configuration/application.configuration');
const database = require('./database/database');
const router = require('./route/index.route');

const app = express();

app.use(router);

app.listen(configuration.port, async () => {
	console.log(`PodScholar listening on port ${configuration.port}.`);

	database.connect();
});