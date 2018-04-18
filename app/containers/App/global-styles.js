import { injectGlobal } from 'styled-components'

import postsBgUrl from '../../assets/images/posts-bg.jpg'

injectGlobal`
    html,
    body {
    height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(${postsBgUrl});
        background-attachment: fixed;
        background-size: cover;
    }

    #app {
        position: relative;
        min-height: 100%;
        padding-bottom: 100px;
    }
`