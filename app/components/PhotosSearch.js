import React from 'react'
import SimpleMap from './SimpleMap'
import api from '../utils/api'

export default class PhotosSearch extends React.Component {
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