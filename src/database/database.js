const { MongoClient, ServerApiVersion } = require('mongodb');

const configuration = require('../configuration/database.configuration');

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING, {
	serverApi: ServerApiVersion.v1,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

let connection = null;

async function connect() {
	client.connect((error, client) => {
		if (error) return console.log(error);

		connection = client;

		console.log('Database connection established.');
	});
}

async function disconnect() {
	client.close((error) => {
		if (error) return console.log(error);

		console.log('Database disconnected.')
	});
}

async function get() {
	if (connection !== null) {
		return connection;
	}

	return connect();
}

module.exports = { configuration, connect, disconnect, get };