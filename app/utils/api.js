import fetch from 'fetch-jsonp'
import axios from 'axios'

const serviceToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d';


module.exports = {
    getUsersInfo: (usersUids,params) => {
        return fetch(`https://api.vk.com/method/users.get?user_ids=${usersUids}&fields=${params}&v=5.65&access_token=${serviceToken}`)
        .then((data) => data.json())
            .then((response) => {
                return response.response;
            })
            .catch((e) => {
                console.log(e)
            })
    },
    getTopPosts: (domain) => {
        return fetch(`https://api.vk.com/method/wall.get?domain=${domain}&count=100&v=5.65&access_token=${serviceToken}`)
        .then((data) => data.json())
            .then((response) => {
                return response;
            })
            .catch((e) => {
                console.log(e);
            })
    },
    getMutualFriends: (sourceId, targetId, userToken) => {
        return fetch(`https://api.vk.com/method/friends.getMutual?source_uid=${sourceId}&target_uid=${targetId}&v=5.65&access_token=${userToken}`)
            .then((data) => data.json())
            .then((response) => {
                return response.response;
            })
            .catch((e) => {
                console.log(e)
            })
    },
    photoSearch: (lat, long, radius) => {
        return fetch(`https://api.vk.com/method/photos.search?lat=${lat}&long=${long}&radius=${radius}&sort=0&v=5.65&access_token=${serviceToken}`)
        .then((data) => data.json())
            .then((response) => {
                return response.response.items;
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

