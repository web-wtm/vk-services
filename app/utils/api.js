import fetch from 'fetch-jsonp'

const accessToken = '36681f27c141dd738c4d205be079df535bdef3138a20c644f8babc601c483e451bb55cfb5fed3815894ea';

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
    getNearUser: (lat, long, accuracy=1) => {
        return fetch(`https://api.vk.com/method/users.getNearby?latitude=${lat}&longitude=${long}&accuracy=${accuracy}&v=5.65&access_token=${accessToken}`)
        .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    },
    getTopPosts: (domain) => {
        return fetch(`https://api.vk.com/method/wall.get?domain=${domain}&v=5.65&access_token=${accessToken}`)
        .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    }
}

// 7e8c6b43faa6a671514d5363766f3b751ac72b1064c06f111ffd01cff25145bf009ae69313134e2c385a5 h
// 36681f27c141dd738c4d205be079df535bdef3138a20c644f8babc601c483e451bb55cfb5fed3815894ea
// https://oauth.vk.com/authorize?client_id=1673052&display=page&redirect_uri=https://vk.com/t7490w743m&scope=friends&response_type=token&v=5.65