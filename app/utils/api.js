import axios from 'axios'

const getMutual = (sourceUid, targetUid) => {
    return axios.get(`https://api.vk.com/method/friends.getMutual?source_uid=${sourceUid}&target_uid=${targetUid}&v=5.65`)
        .then((data) => data)
}

module.exports = {
    getMutual: getMutual()
}