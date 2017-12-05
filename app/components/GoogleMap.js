import React from 'react'
import GoogleMapReact from 'google-map-react'

const CurrentPoint = () => (
    <div className='cursor'>
        X
    </div>
)

class SimpleMap extends React.Component {
    constructor(props) {
        super (props)
    }

    static defaultProps = {
        center: {lat: 50.44, lng: 30.54},
        zoom: 10
    }

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                onClick={this.props.onClick}
            >
                <CurrentPoint lat={this.props.lat} lng={this.props.lang} />
            </GoogleMapReact>
        )
    }
}


export default SimpleMap;

// map api key