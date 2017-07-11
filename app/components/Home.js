import React from 'react'
import api from '../utils/api'
import queryString from 'query-string'
import Video from './Video'

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
            <div className='content'>
                <div className='info-container'>
                    <div className='info'>
                        For use functionals of app you need to be authorize in VK
                    </div>
                    <div className='getToken'>
                        If you have been authorize, <br /> click it
                        <a href='https://oauth.vk.com/authorize?client_id=6104841&display=page&redirect_uri=https://vk-sevices.firebaseapp.com&scope=friends&response_type=token&v=5.65'>
                            get permission
                        </a>
                        <p>
                            Next step is save your status, <br /> click it
                            <button onClick={this.getToken}>get token</button>
                        </p>
                    </div>
                    <Video />
                </div>
                
            </div>
        )
    }
}