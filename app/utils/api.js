import fetch from 'fetch-jsonp'
import axios from 'axios'

const accessToken = 'c2f00a27c2f00a27c2f52772d5c2e98d7bcc2f0c2f00a279baf5c6d66f8babbe5ce21df';


module.exports = {
    getAccessToken: () => {
        return fetch('https://oauth.vk.com/access_token?client_id=1673052&client_secret=Zk6IQ6pZJlwjxVB4JK0L&redirect_uri=https://oauth.vk.com/blank.html&grant_type=client_credentials')
            .then((response) => {
                console.log(response)
            })
},
    getMutualFriends: (sourceId, targetId) => {
        return fetch(`https://api.vk.com/method/friends.getMutual?source_uid=${sourceId}&target_uid=${targetId}&v=5.65&access_token=${accessToken}`)
            .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    },
    getUsersInfo: (userUids,params) => {
        return fetch(`https://api.vk.com/method/users.get?user_ids=${userUids}&v=5.65&access_token=${accessToken}`)
        .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    },
    getTopPosts: (domain) => {
        return fetch(`https://api.vk.com/method/wall.get?domain=${domain}&count=100&v=5.65&access_token=${accessToken}`)
        .then((data) => data.json())
            .then((response) => {
                return response.response.items;
            })
    },
    photoSearch: (lat, long, radius) => {
        return fetch(`https://api.vk.com/method/photos.search?lat=${lat}&long=${long}&radius=${radius}&sort=0&v=5.65&access_token=${accessToken}`)
        .then((data) => data.json())
            .then((response) => {
                return response.response.items;
            })
    }
}

// https://oauth.vk.com/authorize?client_id=1673052&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.65