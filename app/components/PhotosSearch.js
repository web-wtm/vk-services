import React from 'react'
import SimpleMap from './SimpleMap'
import api from '../utils/api'

export default class PhotosSearch extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this);
    }
    onClick (obj){
        console.log(obj.lat, obj.lng)
        api.photoSearch(obj.lat, obj.lng, 6000)
    } 
    render () {
        return (
            <div>
                Photos
                <div style={{width: '100%', height: '400px'}}>
                    <SimpleMap onClick={(this.onClick)} />
                </div>
            </div>
        )
    }
}

// photos.search