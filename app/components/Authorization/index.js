import React from 'react'
import { parse } from 'query-string'

import { Info, NeedAuth, SignIn, SaveToken } from './styled'
import Button from '../Button'

const Authorization = (props) => {
    const signInHref = 'https://oauth.vk.com/authorize?client_id=6104841&display=page&redirect_uri=https://vk-services.firebaseapp.com&scope=friends&response_type=token&v=5.65'
    return (
        <Info>
            {
                !parse(props.location.hash).access_token ? 
                <NeedAuth> 
                    1. For use all functions of app you need to be authorized in VK <br />
                    2. If you have been authorized, click it
                    <SignIn href={signInHref}>
                        get permission
                    </SignIn>
                </NeedAuth>
                :
                <SaveToken>
                        3. Next step is saving your status, click it
                    <Button text='save token' onClick={props.onClick} />
                </SaveToken>
            }
        </Info>
    )
}

export default Authorization