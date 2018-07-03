import styled from 'styled-components'

import LoadingBg from '../../assets/images/loading.gif'

const LoadingAnimation = styled.div`
    background-image: url(${LoadingBg});
    width: 100px;
    height: 100px;
    background-size: 100%;
    position: fixed;
    z-index: 3;
    top: -5px;
    left: 110px

    @media (max-width: 780px) {
        left: 10px;
    }
`

export default LoadingAnimation