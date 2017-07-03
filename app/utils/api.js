import fetch from 'fetch-jsonp'

const accessToken = '009eb6a61f940e5e1dffd10b207f18194259f665e721f50855f803383a3af717dec6f9693bebccad58e2c';

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
        return fetch(`https://api.vk.com/method/wall.get?domain=${domain}&count=20&v=5.65&access_token=${accessToken}`)
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