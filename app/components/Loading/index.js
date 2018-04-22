import styled from 'styled-components'

import LoadingBg from '../../assets/images/loading.gif'

const LoadingAnimation = styled.div`
    background-image: url(${LoadingBg});
    width: 100px;
    height: 100px;
    background-size: 100%;
    position: absolute;
    z-index: 3;
    top: -5px;
    left: 180px
`

export default LoadingAnimation