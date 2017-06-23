import fetch from 'fetch-jsonp'

const getMutual = () => {
        return fetch(`https://api.vk.com/method/friends.getMutual?source_uid=5956085&target_uid=20948943&v=5.65&access_token=7e8c6b43faa6a671514d5363766f3b751ac72b1064c06f111ffd01cff25145bf009ae69313134e2c385a5`)
            .then((data) => data.json())
            .then((response) => {
                console.log(response)
            })
    }

module.exports = {
    getMutual: getMutual()
}