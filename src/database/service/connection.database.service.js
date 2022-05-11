const { configuration, get } = require('../database');

function primary(collection) {
	return get().db(configuration.primaryDatabase).collection(collection);
}

function stage(collection) {
	return get().db(configuration.stageDatabase).collection(collection);
}

module.exports = { primary, stage }