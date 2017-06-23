import fetch from 'fetch-jsonp'

const accessToken = '7e8c6b43faa6a671514d5363766f3b751ac72b1064c06f111ffd01cff25145bf009ae69313134e2c385a5';

module.exports = {
    getMutualFriends: (sourceId, targetId) => {
        return fetch(`https://api.vk.com/method/friends.getMutual?source_uid=${sourceId}&target_uid=${targetId}&v=5.65&access_token=${accessToken}`)
            .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    },
    getUsersInfo: (userUids,params) => {
        return fetch(`https://api.vk.com/method/users.get?user_ids=${userUids}&v=5.65`)
        .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    }
}