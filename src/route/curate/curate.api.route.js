const router = require('express').Router();
const { findSubcategory } = require('../../database/service/category.database.service.js');
const { findUserById } = require('../../database/service/user.database.service');
const { findUserByUsername } = require('../../database/service/user.database.service');
const { findPodcastByUsernameAndTitle } = require('../../database/service/podcast.database.service');
const { findKeywordByKeyword } = require('../../database/service/keyword.database.service');
const { updateUserAddCategoryFollow } = require('../../database/service/user.database.service');
const { updateUserRemoveCategoryFollow } = require('../../database/service/user.database.service');
const { updateUserAddFollowedUser } = require('../../database/service/user.database.service');
const { updateUserRemoveFollowedUser } = require('../../database/service/user.database.service');
const { updateUserAddBookmark } = require('../../database/service/user.database.service');
const { updateUserRemoveBookmark } = require('../../database/service/user.database.service');
const { updateUserAddLike } = require('../../database/service/user.database.service');
const { updateUserRemoveLike } = require('../../database/service/user.database.service');
const { updateUserAddKeyword } = require('../../database/service/user.database.service');
const { updateUserRemoveKeyword } = require('../../database/service/user.database.service');

router.patch('/api/curate/category/:value', async (request, response) => {
	
    // Get the userID from the body of the request
    const userID = request.body.user;
    // Get the category from the value of the request and see if it's in the DB
    const category = await findSubcategory(request.params.value);

    // Does the category exist in the database?
    if( category ) {

        // Find the user record that the userID belongs to
        const userRecord = await findUserById(userID);
        const categoryAlreadyFollowed = false;

        // Does the user already follow the category?
        for(let i = 0; i < userRecord.curation.category.length; i++) {

            if( userRecord.curation.category[i].name === request.params.value ) categoryAlreadyFollowed = true;

        }

        // If the user doesn't already follow the category then add the category to the user record
        if( userRecord && ( categoryAlreadyFollowed === false ) ) {

            let addCategoryToUserRecord = await updateUserAddCategoryFollow(userID, request.params.value);

            // If successful then return the entire updated user record
            if( addCategoryToUserRecord ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }
            else {

                return response.status(422);

            }

        }

        // If the user already follows the category then remove the category from the user record
        else if( userRecord && ( categoryAlreadyFollowed === true ) ) {

            let removeCategoryFromUserRecord = await updateUserRemoveCategoryFollow(userID, request.params.value);

            // If successful then return the entire updated user record
            if( removeCategoryFromUserRecord ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }

        }

        else {

            return response.status(400);

        }

    }
    else {

        return response.status(400);

    }

});

router.patch('/api/curate/creator/:username', async (request, response) => {
	
    // Get the userID from the body of the request
    const userID = request.body.user;
    // Get the user to follow record from the DB
    const userToFollowRecord = await findUserByUsername(request.params.username);

    // Does the user exist in the database?
    // A user cannot follow themselves
    if( userToFollowRecord && ( userID != userToFollowRecord._id ) ) {

        // Find the user record that the userID belongs to
        const userRecord = await findUserById(userID);
        const userAlreadyFollowed = false;

        // Does the user already follow this creator?
        for(let i = 0; i < userRecord.curation.creator.length; i++) {

            if( userRecord.curation.creator[i].username === request.params.username ) userAlreadyFollowed = true;

        }

        // If the user doesn't already follow the creator then add the creator to the user record
        if( userRecord && (  userAlreadyFollowed === false ) ) {

            let addFollowedUserToUserRecord = await updateUserAddFollowedUser(userID, request.params.username);

            // If successful then return the entire updated user record
            if( addFollowedUserToUserRecord ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }
            else {

                return response.status(422);

            }

        }

        // If the user already follows the creator user then remove the creator user to the user record
        else if( userRecord && ( userAlreadyFollowed === true ) ) {

            let removeFollowedUserFromUserRecord = await updateUserRemoveFollowedUser(userID, request.params.username);

            // If successful then return the entire updated user record
            if( removeFollowedUserFromUserRecord ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }

        }

        else {

            return response.status(400);

        }

    }
    else {

        return response.status(400);

    }

});

router.patch('/api/curate/keyword/:value', async (request, response) => {
	
    // Get the userID from the body of the request
    const userID = request.body.user;
    // Get the keyword from the value of the request and see if it's in the DB
    const keywordToFollow = await findKeywordByKeyword(request.params.value);

    // Does the keyword exist in the database? 
    if( keywordToFollow ) {

        // Find the user record that the userID belongs to
        const userRecord = await findUserById(userID);
        const keywordAlreadyFollowed = false;

        // Has the user already followed the keyword?
        for(let i = 0; i < userRecord.curation.keyword.length; i++) {

            if( userRecord.curation.keyword[i].name === request.params.keyword ) keywordAlreadyFollowed = true;

        }

        // If the keyword is not currently followed
        if( userRecord && ( keywordAlreadyFollowed === false ) ) {

            let addKeywordToUser = await updateUserAddKeyword(userID, request.params.value);

            // If successful then return the entire updated user record
            if( addKeywordToUser ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }
            else {

                return response.status(422);

            }

        }

        // If the user already follows the keyword then remove the keyword from the user record
        else if( userRecord && ( keywordAlreadyFollowed === true ) ) {

            let removeKeywordFromUser = await updateUserRemoveKeyword(userID, request.params.value);

            // If successful then return the entire updated user record
            if( removeKeywordFromUser ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }

        }

        else {

            return response.status(400);

        }

    }
    else {

        return response.status(400);

    }

});

router.patch('/api/curate/podcast/bookmark/:username/:title', async (request, response) => {
	
    // Get the userID from the body of the request
    const userID = request.body.user;
    // Get the podcast from the username and title of the request and see if it's in the DB
    const podcastToBookmark = await findPodcastByUsernameAndTitle(request.params.username, request.params.title);

    // Does the podcast exist in the database?
    if( podcastToBookmark ) {

        // Find the user record that the userID belongs to
        const userRecord = await findUserById(userID);
        const podcastAlreadyBookmarked = false;

        // Has the user already bookmarked the podcast?
        for(let i = 0; i < userRecord.curation.podcast.bookmark.length; i++) {

            if( userRecord.curation.podcast.bookmark[i].username === request.params.username && userRecord.curation.podcast.bookmark[i].title === request.params.title) podcastAlreadyBookmarked = true;

        }

        // If the user has not bookmarked the podcast then bookmark it
        if( userRecord && ( podcastAlreadyBookmarked === false ) ) {

            let addBookmarkToUser = await updateUserAddBookmark(userID, request.params.username, request.params.title);

            // If successful then return the entire updated user record
            if( addBookmarkToUser ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }
            else {

                return response.status(422);

            }

        }

        // If the user already bookmarked the podcast then remove the bookmark from the user record
        else if( userRecord && ( podcastAlreadyBookmarked === true ) ) {

            let removeBookmarkFromUser = await updateUserRemoveBookmark(userID, request.params.username, request.params.title);

            // If successful then return the entire updated user record
            if( removeBookmarkFromUser ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }

        }

        else {

            return response.status(400);

        }

    }
    else {

        return response.status(400);

    }

});

router.patch('/api/curate/podcast/like/:username/:title', async (request, response) => {
	
    // Get the userID from the body of the request
    const userID = request.body.user;
    // Get the podcast from the value of the request and see if it's in the DB
    const podcastToLike = await findPodcastByUsernameAndTitle(request.params.username, request.params.title);

    // Does the podcast exist in the database?
    if( podcastToLike ) {

        // Find the user record that the userID belongs to
        const userRecord = await findUserById(userID);
        const podcastAlreadyLiked = false;

        // Has the user already liked the podcast?
        for(let i = 0; i < userRecord.curation.podcast.like.length; i++) {

            if( userRecord.curation.podcast.like[i].username === request.params.username && userRecord.curation.podcast.like[i].title === request.params.title) podcastAlreadyLiked = true;

        }

        // If the user has not liked the podcast then like it
        if( userRecord && ( podcastAlreadyLiked === false ) ) {

            let addLikeToUser = await updateUserAddLike(userID, request.params.username, request.params.title);

            // If successful then return the entire updated user record
            if( addLikeToUser ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }
            else {

                return response.status(422);

            }

        }

        // If the user already likes the podcast then remove the podcast from the user record
        else if( userRecord && ( podcastAlreadyLiked === true ) ) {

            let removeLikeFromUser = await updateUserRemoveLike(userID, request.params.username, request.params.title);

            // If successful then return the entire updated user record
            if( removeLikeFromUser ) {

                let returnUserRecord = await findUserById(userID);

                return response.status(200).json(returnUserRecord);

            }

        }

        else {

            return response.status(400);

        }

    }
    else {

        return response.status(400);

    }

});

module.exports = router;