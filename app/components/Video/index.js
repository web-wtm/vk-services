import React from 'react'
import styled from 'styled-components'

import videoMp4 from '../../assets/video/walk.mp4'
import videoWebm from '../../assets/video/walk.webm'
import videoBgUrl from '../../assets/images/video-bg.jpg'

const VideoStyled = styled.video`
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
    background-image: url(${videoBgUrl});
`
const Video = () => {
    return (
        <VideoStyled autoPlay loop id='video'>
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
        </VideoStyled>
    )
}

export default Video;