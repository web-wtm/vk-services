import React from 'react'
import GoogleMapReact from 'google-map-react'

import { checkOwnerId } from '../../utils/helpers'
import { CurrentPoint, MapStyled, PhotoOnMap } from './styled'

class SimpleMap extends React.Component {
    constructor(props) {
        super (props)
    }

    static defaultProps = {
        center: {lat: 50.44, lng: 30.54},
        zoom: 10
    }

    render() {
        const {
            center,
            zoom,
            onClick, 
            lat, 
            lng, 
            radius,
            photos
        } = this.props

        return (
            <MapStyled>
                <GoogleMapReact defaultCenter={center} defaultZoom={zoom} onClick={onClick}>
                    <CurrentPoint lat={lat} lng={lng} radius={radius} />
                    {
                        photos && photos.map((item, index) => {
                            const ownerLink = `https://vk.com/id${checkOwnerId(item.owner_id)}`,
                                  bg = { backgroundImage: `url(${item.photo_75})` }

                            return <PhotoOnMap key={index} style={bg} target='_blank' href={ownerLink} lat={item.lat} lng={item.long} />
                        })
                    }
                </GoogleMapReact>
            </MapStyled>
        )
    }
}

export default SimpleMap;