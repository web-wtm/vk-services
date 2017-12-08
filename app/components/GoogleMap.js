import React from 'react'
import GoogleMapReact from 'google-map-react'

// const CurrentPoint = (props) => (
//     <div className='cursor large'></div>
// )

class CurrentPoint extends React.Component {
    constructor(props) {
        super(props)
    }  
    render() {
       return <div className={'cursor size' + this.props.radius}></div>
    }
}

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
                <CurrentPoint lat={this.props.lat} lng={this.props.lng} radius={this.props.radius} />
            </GoogleMapReact>
        )
    }
}


export default SimpleMap;

// map api key