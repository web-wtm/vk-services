import React from 'react';
import GoogleMapReact from 'google-map-react';
import api from '../utils/api'


const AnyReactComponent = ({ text }) => (
    <div style={{
        position: 'relative', color: 'white', background: 'red',
        height: 40, width: 60, top: -20, left: -30,
    }}>
        {text}
    </div>
);

const SimpleMap = ({ center, zoom, onClick }) => {
    return (
        <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}
            onClick={onClick}
        />
    )
}
SimpleMap.defaultProps = {
    center: {lat: 50.44, lng: 30.54},
    zoom: 10
}

export default SimpleMap;

// map api key