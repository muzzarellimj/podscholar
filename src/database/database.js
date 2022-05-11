const { MongoClient, ServerApiVersion } = require('mongodb');

const configuration = require('../configuration/database.configuration');

const client = new MongoClient(configuration.connectionString, {
	serverApi: ServerApiVersion.v1,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let connection = null;

function connect() {
	client.connect((error, client) => {
		if (error) return console.log(error);

		connection = client;

		console.log('Database connection established.');
	});
}

function disconnect() {
	client.close((error) => {
		if (error) return console.log(error);

		console.log('Database disconnected.')
	});
}

function get() {
	return connection;
}

module.exports = { configuration, connect, disconnect, get };