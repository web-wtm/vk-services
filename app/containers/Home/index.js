import React from 'react'
import queryString from 'query-string'
import { connect } from 'react-redux'

import Video from '../../components/Video'

const NeedAuth = (props) => {
    return (
        <div className='info'>
            <div className='need-auth'>
            {
                !queryString.parse(props.location.hash).access_token ? 
                <div> 
                    <div className='advice'>
                        <p>
                            1. For use all functions of app you need to be authorized in VK
                        </p>
                    </div>
                    <div className='permission'>
                        <p>
                            2. If you have been authorized, click it
                        </p>
                        <a className='btn' href='https://oauth.vk.com/authorize?client_id=6104841&display=page&redirect_uri=https://vk-services.firebaseapp.com&scope=friends&response_type=token&v=5.65'>
                            get permission
                        </a>
                    </div>
                </div>
                :
                    <div className='get-token'>
                        <p className='save-status'>
                            3. Next step is saving your status, click it
                        </p>
                        <button className='btn' onClick={props.onClick}>save token</button>
                    </div>

            }
            </div>
        </div>
    )
}

export default class Home extends React.Component {
    constructor() {
        super()
    }

    getToken = () => {
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
                        sessionStorage.getItem('accessToken') ? 
                            <div className='already-auth'>
                                You have already authorized and can use all services <span>&#10003;</span>
                            </div>
                            : 
                            <NeedAuth onClick={this.getToken} location={this.props.location} />
                    }
                <Video /> 
            </div>
        )
    }
}