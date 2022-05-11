const { configuration, get: database } = require('../database');
const { primary } = require('./connection.database.service');

function insertCategory(document) {
	primary(configuration.primaryCategoryCollection).insertOne(document, (error) => {
		if (error) return console.log(error);
	});
}

function insertCategories(documents) {
	primary(configuration.primaryCategoryCollection).insertMany(documents, (error) => {
		if (error) return console.log(error);
	})
}

module.exports = { insertCategory, insertCategories };