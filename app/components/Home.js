import React from 'react'
import api from '../utils/api'

export default class Home extends React.Component {
    constructor() {
        super()

        this.getToken = this.getToken.bind(this);
    }
    getToken() {
        api.getAccessToken()
    }
    render() {
        return (
            <div>
                App was made for practice with ReactJS
                <button onClick={this.getToken}>get</button>
            </div>
        )
    }
}