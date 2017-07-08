import fetch from 'fetch-jsonp'
import axios from 'axios'

const accessToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d';


module.exports = {
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
    }
}

