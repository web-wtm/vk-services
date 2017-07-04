import fetch from 'fetch-jsonp'

const accessToken = '2f5a0d9f86aa96c61c7d00bd31d1456282f18d7a1c60e50ffe207d586e118c7d4918c3d6cb1c5611af5fa';


module.exports = {
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

// https://oauth.vk.com/authorize?client_id=1673052&display=page&redirect_uri=https://vk.com/t7490w743m&scope=friends&response_type=token&v=5.65