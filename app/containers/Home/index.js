import React from 'react'
import { parse } from 'query-string'
import { connect } from 'react-redux'

import { Container, AlreadyAuth } from './styled'
import Authorization from '../../components/Authorization'
import Video from '../../components/Video'



export default class Home extends React.Component {
    constructor() {
        super()
    }

    getToken = () => {
        let querys = parse(this.props.location.hash);
        if (querys.access_token) {
            sessionStorage.setItem('accessToken', querys.access_token);
            location.reload();
        } 
    }

    render() {
        return (
            <Container>
                    {sessionStorage.getItem('accessToken') ? 
                        <AlreadyAuth className='already-auth'>
                            You have already authorized and can use all services <span>&#10003;</span>
                        </AlreadyAuth>
                        : 
                        <Authorization onClick={this.getToken} location={this.props.location} />
                    }
                <Video /> 
            </Container>
        )
    }
}