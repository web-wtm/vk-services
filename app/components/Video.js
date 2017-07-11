import React from 'react';
import videoMp4 from '../video/walk.mp4';
import videoWebm from '../video/walk.webm';

const Video = () => {
    return (
        <div>
            <video autoPlay loop id="video">
                <source src={videoWebm} type="video/webm" />
                <source src={videoMp4} type="video/mp4" />
            </video>
        </div>
    )
};

export default Video;