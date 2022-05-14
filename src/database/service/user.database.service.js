const { configuration } = require('../database');
const { primary, stage} = require('./connection.database.service');
const { ObjectId } = require('mongodb');

async function findUserById(id) {
	return await primary(configuration.primaryUserCollection).findOne({ _id: new ObjectId(id) });
}

async function findUserByUsername(username) {
	return await primary(configuration.primaryUserCollection).findOne({'profile.username': username });
}

async function insertPrimaryUser(user) {
	const result = await primary(configuration.primaryUserCollection).insertOne(user);

	if (result !== null) {
		console.log(`A user document was inserted in the primary database with the _id: ${result.insertedId}`);

		return result.insertedId;

	} else {
		console.log('A document insertion request to primary failed!');

		return null;
	}
}

async function insertStageUser(user) {
	const result = await stage(configuration.stageUserCollection).insertOne(user);

	if (result !== null) {
		console.log(`A user document was inserted in the stage database with the _id: ${result.insertedId}`);

		return result.insertedId;

	} else {
		console.log('A document insertion request to stage failed!');

		return null;
	}
}

async function updateUserAddCategoryFollow(userID, category) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $push: { "curation.category": { name: `${category}` } } } );

}

async function updateUserRemoveCategoryFollow(userID, category) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $pull: { "curation.category": { name: `${category}` } } } );

}

async function updateUserAddFollowedUser(userID, otherUserUsername) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $push: { "curation.category": { username: `${otherUserUsername}` } } } );

}

async function updateUserRemoveFollowedUser(userID, otherUserUsername) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $pull: { "curation.creator": { username: `${otherUserUsername}` } } } );

}

async function updateUserAddBookmark(userID, otherUserUsername, podcastTitle) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $push: { "curation.podcast.bookmark": { username: `${otherUserUsername}`, title: `${podcastTitle}` } } } );

}

async function updateUserRemoveBookmark(userID, otherUserUsername, podcastTitle) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $pull: { "curation.podcast.bookmark": { username: `${otherUserUsername}`, title: `${podcastTitle}` } } } );

}

async function updateUserAddLike(userID, otherUserUsername, podcastTitle) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $push: { "curation.podcast.like": { username: `${otherUserUsername}`, title: `${podcastTitle}` } } } );

}

async function updateUserRemoveLike(userID, otherUserUsername, podcastTitle) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $pull: { "curation.podcast.like": { username: `${otherUserUsername}`, title: `${podcastTitle}` } } } );

}

async function updateUserAddKeyword(userID, keyword) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $push: { "curation.keyword": { name: `${keyword}` } } } );

}

async function updateUserRemoveKeyword(userID, keyword) {

	return await primary(configuration.primaryUserCollection).updateOne( { _id : new ObjectId(userID) }, { $pull: { "curation.bookmark": { name: `${keyword}` } } } );

}



module.exports = { findUserById, findUserByUsername, insertPrimaryUser, insertStageUser, updateUserAddCategoryFollow, updateUserRemoveCategoryFollow, updateUserAddFollowedUser, updateUserRemoveFollowedUser, updateUserAddBookmark, updateUserRemoveBookmark, updateUserAddLike, updateUserRemoveLike, updateUserAddKeyword, updateUserRemoveKeyword };