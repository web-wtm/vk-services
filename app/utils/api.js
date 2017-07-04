import fetch from 'fetch-jsonp'

const accessToken = '59bf59b0b4bd01283bca60ab690575ed576bc0967c2fa403a4ce92420d05844a203d7de05d19235d81b00';


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
                let items = response.response.items 
                return items;
            })
    },
    photoSearch: (lat, long, radius) => {
        return fetch(`https://api.vk.com/method/photos.search?lat=${lat}&long=${long}&radius=${radius}&v=5.65&access_token=${accessToken}`)
        .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    }
}

// https://oauth.vk.com/authorize?client_id=1673052&display=page&redirect_uri=https://vk.com/t7490w743m&scope=friends&response_type=token&v=5.65