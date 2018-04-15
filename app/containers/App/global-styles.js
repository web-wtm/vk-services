import { injectGlobal } from 'styled-components'

injectGlobal`
    html,
    body {
    height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        padding: 90px 0 0 0;
        margin: 0;
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/posts-bg.jpg);
        background-attachment: fixed;
        background-size: cover;
    }
`