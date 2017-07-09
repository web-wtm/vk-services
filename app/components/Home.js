import React from 'react'
import api from '../utils/api'
import queryString from 'query-string'

export default class Home extends React.Component {
    constructor() {
        super()

        this.getToken = this.getToken.bind(this)
    }
    getToken () {
        let querys = queryString.parse(this.props.location.hash)
        localStorage.setItem('accessToken', querys.access_token);
        console.log('token', localStorage.getItem('accessToken'));
    }
    render() {
        return (
            <div>
                App was made for practice with ReactJS
                <a href='https://oauth.vk.com/authorize?client_id=6104841&display=page&redirect_uri=https://vk-sevices.firebaseapp.com&scope=friends&response_type=token&v=5.65'>
                    get
                </a> 
                <button onClick={this.getToken}>get token</button>
            </div>
        )
    }
}