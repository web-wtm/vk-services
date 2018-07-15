import React, { Fragment } from 'react'
import { parse } from 'query-string'
import { Info, LogIn, SaveToken } from './styled'
import Button from '../Button'

const Authorization = (props) => {
    const signInHref = 'https://oauth.vk.com/authorize?client_id=6104841&display=page&redirect_uri=https://vk-services.firebaseapp.com&scope=friends&response_type=token&v=5.65'
    
    return (
        <Info>
            {
                !props.token ? 
                <Fragment>
                    For use all services of app you need to be authorized in VK &#8594;
                    <LogIn href={signInHref}>
                        log in
                    </LogIn>
                </Fragment>
                :
                <Fragment>
                        Great, now you need just &#8594;
                    <SaveToken onClick={props.onClick}>save token</SaveToken>
                </Fragment>
            }
        </Info>
    )
}   

export default Authorization