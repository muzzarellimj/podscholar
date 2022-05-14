const { configuration } = require('../database');
const { primary } = require('./connection.database.service');

async function findKeywordByKeyword(keyword) {
	
    return await primary(configuration.primaryKeywordCollection).findOne({"source.title": keyword});

}

module.exports = { findKeywordByKeyword }