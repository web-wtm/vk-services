import React from 'react'
import fetch from 'fetch-jsonp'
// import api from '../utils/api'

export default class MutualFriends extends React.Component {

    render () {
    const getMutual = () => {
        return fetch(`https://api.vk.com/method/wall.get?domain=serial_friends&v=5.65&access_token=f840ba08f840ba08f840ba0859f81c0d83ff840f840ba08a10260470c008425f33e5a07`)
            .then((data) => {
                var a = data.json()
                console.log(a)
            })
    }
        return (
            <div>
                mutual friends!
                <button onClick={getMutual}>get</button>
            </div>
        )
    }
}

// friends.getMutual