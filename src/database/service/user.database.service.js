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

async function deleteStageUser(user) {
	const result = await stage(configuration.stageUserCollection).deleteOne(user)

    if (result.deletedCount > 0) {
        console.log('A validation token document was deleted');

        return result.deletedCount;

    } else {
        console.log('No document was deleted');

        return null;
    }
}

async function deleteStageCreator(creator) {
	const result = await stage(configuration.stageUserCollection).deleteOne(creator)

    if (result.deletedCount > 0) {
        console.log('A validation token document was deleted');

        return result.deletedCount;

    } else {
        console.log('No document was deleted');

        return null;
    }
}

async function findStageUserById(id) {
	return await stage(configuration.stageUserCollection).findOne({ _id: new ObjectId(id) });
}

async function findPrimaryUserById(id) {
	return await primary(configuration.primaryUserCollection).findOne({ _id: new ObjectId(id) });
}

async function updatePrimaryUserStatus(id){
	const result = await primary(configuration.primaryUserCollection).updateOne({ _id: new ObjectId(id) }, { $set: {'account.status': 'validated'}});

	if (result.modifiedCount > 0) {
        console.log('A user document was updated');

        return result.modifiedCount;

    } else {
        console.log('No modified document');

        return null;
    }
}

async function findUserByEmail(email){
	var result; 

	result = await primary(configuration.primaryUserCollection).findOne({'profile.email': email });

	if (result != null) {
		return result;
	} else {
		result = await stage(configuration.stageUserCollection).findOne({'profile.email': email })
		
		if(result != null) {
			return result;
		} else {
			return null;
		}
	} 
}

async function updatePassword(id,password) {
	var user;

	user = await findPrimaryUserById(id);
	if (user != null) {
		const result = await primary(configuration.primaryUserCollection).updateOne({ _id: new ObjectId(id) }, { $set: {'account.password': password}});

		if (result.modifiedCount > 0) {
			console.log('A primary user document was updated');
			return result.modifiedCount;
	
		} else {
			console.log('No modified document');
			return null;
		}
		
	} else {
		user = await findStageUserById(id);
		if(user != null){
			const res = await stage(configuration.stageUserCollection).updateOne({ _id: new ObjectId(id) }, { $set: {'account.password': password}});

			if (res.modifiedCount > 0) {
				console.log('A stage user document was updated');
				return res.modifiedCount;
		
			} else {
				console.log('No modified document');
				return null;
			}
		} else {
			return null;
		}
	}

	
}



module.exports = { findUserById, findUserByUsername, insertPrimaryUser, insertStageUser, updateUserAddCategoryFollow, updateUserRemoveCategoryFollow, updateUserAddFollowedUser, updateUserRemoveFollowedUser, updateUserAddBookmark, updateUserRemoveBookmark, updateUserAddLike, updateUserRemoveLike, updateUserAddKeyword, updateUserRemoveKeyword, deleteStageUser, deleteStageCreator, findStageUserById, findPrimaryUserById, updatePrimaryUserStatus, findUserByEmail, updatePassword};