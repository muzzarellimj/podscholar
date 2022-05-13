const { configuration } = require('../database');
const { primary } = require('./connection.database.service');

async function insertUser(user) {
	const result = await primary(configuration.primaryUserCollection).insertOne(user);

	if (result !== null) {
		console.log(`A user document was inserted with the _id: ${result.insertedId}`);

		return result.insertedId;

	} else {
		console.log('A document insertion request failed!');

		return null;
	}
}

module.exports = { insertUser };