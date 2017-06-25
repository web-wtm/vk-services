import React from 'react'
import SimpleMap from './SimpleMap'

export default class NearbyUsers extends React.Component {
    
    render () {
        return (
            <div>
                <div style={{width: '100%', height: '400px'}}>
                    <SimpleMap onClick={(this.onClick)} />
                </div>
            </div>
        )
    }
}
// users.getNearby
// AIzaSyCeJWovine-PdAUL-Fy3yHGzD1CHEV75wU