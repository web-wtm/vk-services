import fetch from 'fetch-jsonp'

const accessToken = 'd57321f27f528d2502c2406d2f66e6398a8380705028d7b0d01508d5958ce6fba33e356a62116a4650dd8';

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
        return fetch(`https://api.vk.com/method/wall.get?domain=${domain}&count=50&v=5.65&access_token=${accessToken}`)
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

// d57321f27f528d2502c2406d2f66e6398a8380705028d7b0d01508d5958ce6fba33e356a62116a4650dd8 h
// 36681f27c141dd738c4d205be079df535bdef3138a20c644f8babc601c483e451bb55cfb5fed3815894ea
// https://oauth.vk.com/authorize?client_id=1673052&display=page&redirect_uri=https://vk.com/t7490w743m&scope=friends&response_type=token&v=5.65