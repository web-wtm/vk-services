import './index.scss'
import React from 'react'
import GoogleMapReact from 'google-map-react'

import { checkOwnerId } from '../../utils/helpers'

const CurrentPoint = ({radius}) => (
    <div className='cursor'></div>
)

const PhotoOnMap = (props) => {
    const bg = { backgroundImage: `url(${props.photo.photo_75})` }

    return <a className="photo-on-map" style={bg} target='_blank' href={`https://vk.com/id${checkOwnerId(props.photo.owner_id)}`}></a>
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
                {this.props.photos &&
                        this.props.photos.map((item) => {
                            return <PhotoOnMap 
                                        key={'_' + Math.random().toString(36).substr(2, 9)} 
                                        photo={item} 
                                        lat={item.lat} 
                                        lng={item.long}
                                    />
                        })
                    }
            </GoogleMapReact>
        )
    }
}

export default SimpleMap;