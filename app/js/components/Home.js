import React from 'react'
import api from '../utils/api'
import queryString from 'query-string'
import Video from './Video'

const NeedAuth = (props) => {
    return (
        <div className='info'>
            <div className='need-auth'>
                <div className='advice'>
                    <p>
                        1. For use all functionals of app you need to access to VK or be authorized
                    </p>
                </div>
                <div className='permission'>
                    <p>
                        2. If you have been authorized, click it
                    </p>
                    <a className='btn' href='https://oauth.vk.com/authorize?client_id=6104841&display=page&redirect_uri=https://vk-sevices.firebaseapp.com&scope=friends&response_type=token&v=5.65'>
                        get permission
                    </a>
                </div>
                <div className='get-token'>
                    <p className='save-status'>
                        3. Next step is saving your status, click it
                    </p>
                    <button className='btn' onClick={props.onClick}>get token</button>
                </div>
            </div>
        </div>
    )
}

export default class Home extends React.Component {
    constructor() {
        super()

        this.getToken = this.getToken.bind(this)
    }
    getToken () {
        let querys = queryString.parse(this.props.location.hash);
        if (querys.access_token) {
            sessionStorage.setItem('accessToken', querys.access_token);
            location.reload();
        } 
    }
    render() {
        return (
            <div className='content'>
                
                    {
                        sessionStorage.getItem('accessToken', queryString.parse(this.props.location.hash).access_token) ? 
                            <div className='already-auth'>
                                You have already authorized and can use all services <span>&#10003;</span>
                            </div>
                            : 
                            <NeedAuth onClick={this.getToken} />
                    }
                    
                <Video />
            </div>
        )
    }
}